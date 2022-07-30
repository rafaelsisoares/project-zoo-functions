const data = require('../data/zoo_data');

const animals = data.species.map((animal) => animal.name);

const isMonday = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const weekDays = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekDaySchedule = (day) => {
  if (weekDays.includes(day)) {
    return {
      [day]: {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species
          .filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
      },
    };
  }
};

const fullSchedule = (day) => {
  if (day === 'Monday') {
    return isMonday;
  }
  const scheduleComplete = {};
  Object.assign(scheduleComplete, isMonday);
  weekDays.forEach((weekDay) => Object.assign(scheduleComplete, weekDaySchedule(weekDay)));
  return scheduleComplete;
};

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    const animalTarget = data.species.find(
      (animal) => animal.name === scheduleTarget,
    );
    return animalTarget.availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    return weekDaySchedule(scheduleTarget);
  }
  return fullSchedule(scheduleTarget);
}

module.exports = getSchedule;
