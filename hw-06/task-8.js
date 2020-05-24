import users from './users.js';

// const getUsersWithFriend = (users, friendName) => {
//     return users.default.filter(element => {
//         return element.friends.find(el => el === friendName);
//     });
// };

const getUsersWithFriend = (users, friendName) => {
    return users.filter(element => element.friends.find(el => el === friendName));
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]