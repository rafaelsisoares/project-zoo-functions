const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função retorna um objeto com todos os dias e horários de funcionamento caso não receba parâmetros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se ao receber o parâmetro Monday, a função sempre retorna que o zoo está fechado independente do horário passado', () => {
    const message = 'The zoo is closed';
    expect(getOpeningHours('Monday', '05:00-AM')).toBe(message);
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(message);
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(message);
    expect(getOpeningHours('Monday', '04:00-PM')).toBe(message);
    expect(getOpeningHours('Monday', '09:00-PM')).toBe(message);
  });
  it('Testa se a função retorna a informação de que o zoo está aberto ou fechado dependendo do horário', () => {
    expect(getOpeningHours('Friday', '12:00-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Sunday', '10:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se a função retorna um erro se o hora passada a função não tiver valores entre 0 e 12', () => {
    expect(() => getOpeningHours('Wednesday', '30:00-AM')).toThrowError(/^The hour must be between 0 and 12$/);
  });
  it('Testa se a função retorna um erro se os minutos passados a função não tiver valores entre 0 e 59', () => {
    expect(() => getOpeningHours('Wednesday', '11:71-AM')).toThrowError(/^The minutes must be between 0 and 59$/);
  });
  it('Testa se o dia passado a função é um dia válido', () => {
    expect(() => getOpeningHours('Carnival', '12:00-PM')).toThrowError(/^The day must be valid. Example: Monday$/);
  });
  it('Testa se a função retorna um erro caso a abreviação do horário esteja incorreta', () => {
    expect(() => getOpeningHours('Tuesday', '04:00-F1')).toThrowError(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Testa se a função retorna um erro caso o horário não contenha apenas números', () => {
    expect(() => getOpeningHours('Saturday', '1O:10-AM')).toThrowError(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Friday', '11:3O-AM')).toThrowError(/^The minutes should represent a number$/);
  });
});
