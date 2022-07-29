const data = require("../data/zoo_data");

const animals = data.species.map((animal) => animal.name);

const isMonday = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const weekDays = [
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const fullSchedule = () => {
  const scheduleComplete = {};
  Object.assign(scheduleComplete, isMonday);
  weekDays.forEach((day) => {
    scheduleComplete[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    },
  });
  return scheduleComplete;
};

const weekDaySchedule = (day) => {
  if (day === 'Monday') {
    return isMonday;
  }
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
  return fullSchedule();
};

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    const animalTarget = data.species.find(
      (animal) => animal.name === scheduleTarget
    );
    return animalTarget.availability;
  }
  return weekDaySchedule(scheduleTarget);
}

console.log(getSchedule("Monday"));

module.exports = getSchedule;
