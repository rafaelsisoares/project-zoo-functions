const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
