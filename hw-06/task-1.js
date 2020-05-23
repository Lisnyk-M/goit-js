import * as users from './users.js';
// console.log('usersAr: ', usersAr.default);


// const getUserNames = function(users){
//   const names = [];
//   users.forEach(element => names.push(element.name) );
//   return names;
// }

const getUserNames = function(users){  
  return users.map(element => element.name);  
}

console.log(getUserNames(users.default));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
