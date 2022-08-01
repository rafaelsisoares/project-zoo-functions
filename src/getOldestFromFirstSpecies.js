const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((worker) => worker.id === id);
  const animals = data.species.find((animal) =>
    animal.id === employee.responsibleFor[0]);
  return Object.values(animals.residents.reduce((oldest, actual) => {
    if (oldest.age < actual.age) {
      return actual;
    }
    return oldest;
  }));
}

module.exports = getOldestFromFirstSpecies;
