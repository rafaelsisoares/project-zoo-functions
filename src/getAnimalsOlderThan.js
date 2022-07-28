const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalActual = data.species.find((specie) => specie.name === animal);
  return animalActual.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
