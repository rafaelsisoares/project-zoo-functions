const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
