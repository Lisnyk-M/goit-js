import users from './users.js';

// const calculateTotalBalance = users => {
//     return users.default
//     .map(element => element.balance)
//     .reduce((total, element) => total + element, 0);
// };

const calculateTotalBalance = users => users.reduce((total, {balance}) => total + balance, 0);


console.log(calculateTotalBalance(users)); // 20916