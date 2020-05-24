import users from './users.js';

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(element => element.age > min && element.age < max);
// };

const getUsersWithAge = (users, min, max) => users.filter(({age}) => age > min && age < max);


console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]