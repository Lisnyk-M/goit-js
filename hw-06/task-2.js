import * as users from './users.js';


const getUsersWithEyeColor = (users, color) => {
  return users.filter(element => element.eyeColor == color);
};

console.log(getUsersWithEyeColor(users.default, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]