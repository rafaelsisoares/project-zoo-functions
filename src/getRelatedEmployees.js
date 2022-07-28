const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.map((employee) =>
    employee.managers.some((manId) => manId === id));
  return !!(managers.find((condition) => condition === true));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const related = data.employees.filter((employee) =>
      employee.managers.find((id) => id === managerId));
    return related.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
