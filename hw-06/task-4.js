import * as users from './users.js';

const getInactiveUsers = users => {
  return users.default.filter(element => !element.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]