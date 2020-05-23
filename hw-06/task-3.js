import * as users from './users.js';

const getUsersWithGender = (users, gender) => {
    return users.default
    .filter(element => element.gender === gender)
    .map(element => element.name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]