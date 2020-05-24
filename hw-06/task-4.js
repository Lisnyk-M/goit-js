import users from './users.js';

// const getInactiveUsers = users => {
//   return users.filter(element => !element.isActive);
// };

const getInactiveUsers = users => users.filter(element => !element.isActive);


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]