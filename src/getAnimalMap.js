const data = require('../data/zoo_data');

const animalsNE = data.species.filter((animal) => animal.location === 'NE');
const animalsNW = data.species.filter((animal) => animal.location === 'NW');
const animalsSE = data.species.filter((animal) => animal.location === 'SE');
const animalsSW = data.species.filter((animal) => animal.location === 'SW');

function getAnimalMapSorted(animal, options) {
  if (options.sorted === true) {
    const keys = Object.keys(animal);
    for (let i = 0; i < keys.length; i += 1) {
      animal[keys[i]].map((item) => Object.values(item)[0].sort());
    }
    return animal;
  }
  return animal;
}

function getAnimalMapBySex(options) {
  const animalMapBySex = {};
  animalMapBySex.NE = animalsNE.map((animal) => ({
    [animal.name]: animal.residents.filter((resident) => resident.sex === options.sex)
      .map((filtered) => filtered.name),
  }));
  animalMapBySex.NW = animalsNW.map((animal) => ({
    [animal.name]: animal.residents.filter((resident) => resident.sex === options.sex)
      .map((filtered) => filtered.name),
  }));
  animalMapBySex.SE = animalsSE.map((animal) => ({
    [animal.name]: animal.residents.filter((resident) => resident.sex === options.sex)
      .map((filtered) => filtered.name),
  }));
  animalMapBySex.SW = animalsSW.map((animal) => ({
    [animal.name]: animal.residents.filter((resident) => resident.sex === options.sex)
      .map((filtered) => filtered.name),
  }));
  return getAnimalMapSorted(animalMapBySex, options);
}

function getAnimalMapWithNames(options) {
  const animalMapWithName = {};
  animalMapWithName.NE = animalsNE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  animalMapWithName.NW = animalsNW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  animalMapWithName.SE = animalsSE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  animalMapWithName.SW = animalsSW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  return getAnimalMapSorted(animalMapWithName, options);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return {
      NE: data.species.filter((animal) => animal.location === 'NE')
        .map((animal) => animal.name),
      NW: data.species.filter((animal) => animal.location === 'NW')
        .map((animal) => animal.name),
      SE: data.species.filter((animal) => animal.location === 'SE')
        .map((animal) => animal.name),
      SW: data.species.filter((animal) => animal.location === 'SW')
        .map((animal) => animal.name),
    };
  }
  if (Object.keys(options).includes('sex')) {
    return getAnimalMapBySex(options);
  }
  if (options.includeNames === true) {
    return getAnimalMapWithNames(options);
  }
}

module.exports = getAnimalMap;
