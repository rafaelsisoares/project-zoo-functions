const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função retorna undefined caso não receba parâmetros', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se a função retorna uma frase caso o parâmetro passado não seja uma string', () => {
    expect(handlerElephants(0)).toBe(
      'Parâmetro inválido, é necessário uma string',
    );
  });
  it('Testa se ao passar o parâmetro count, a função retorna a quantidade de elefantes que vivem no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se ao passar o parâmetro names, a função retorna um array com todos os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se ao passar o parâmetro averageAge, a função retorna a idade média dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se a função retorna a região que os elefantes habitam ao passar o parâmetro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se a função retorna null caso o parâmetro não contemple uma funcionalidade', () => {
    expect(handlerElephants('abc')).toBeNull();
  });
});
