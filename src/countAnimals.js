const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allSpecies = {};
    data.species.reduce((actual, next) => {
      allSpecies[actual.name] = actual.residents.length;
      allSpecies[next.name] = next.residents.length;
      return next;
    });
    return allSpecies;
  }

  const { specie, sex } = animal;
  if (sex === undefined) {
    return data.species.find((obj) => obj.name === specie).residents.length;
  }
  return data.species.find((obj) => obj.name === specie).residents.filter((desc) =>
    desc.sex === sex).length;
}
module.exports = countAnimals;
