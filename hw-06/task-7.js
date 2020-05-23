import * as users from './users.js';

// const calculateTotalBalance = users => {
//     return users.default
//     .map(element => element.balance)
//     .reduce((total, element) => total + element, 0);
// };

const calculateTotalBalance = users => {
    return users.default.reduce((total, element) => total + element.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916