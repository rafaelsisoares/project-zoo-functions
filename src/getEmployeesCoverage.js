const data = require('../data/zoo_data');

const staffNames = data.employees.map((employee) => employee.firstName);

const getInfos = (info) => {
  const { id, name } = info;
  const employee = data.employees.find((staff) => staff.firstName === name
  || staff.lastName === name || staff.id === id);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((animalId) => data.species.find((animal) =>
      animal.id === animalId)).map((animal) => animal.name),
    locations: employee.responsibleFor.map((animalId) => data.species.find((animal) =>
      animal.id === animalId)).map((animal) => animal.location),
  };
};

function getEmployeesCoverage(info) {
  if (info === undefined) {
    const staff = [];
    staffNames.forEach((employee) => {
      staff.push(getInfos({ name: employee }));
    });
    return staff;
  }

  const { id, name } = info;
  if (data.employees.some((employee) => employee.id === id
  || employee.firstName === name || employee.lastName === name)) {
    return getInfos(info);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
