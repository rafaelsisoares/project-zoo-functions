const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return {
      NE: data.species.filter((animal) => animal.location === 'NE').map((animal) => animal.name),
      NW: data.species.filter((animal) => animal.location === 'NW').map((animal) => animal.name),
      SE: data.species.filter((animal) => animal.location === 'SE').map((animal) => animal.name),
      SW: data.species.filter((animal) => animal.location === 'SW').map((animal) => animal.name),
    };
  }
}

module.exports = getAnimalMap;
