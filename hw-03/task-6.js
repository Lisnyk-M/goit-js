
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];


// const calculateTotalPrice = function (allProdcuts, productName) {
//     let quantity = 0;
//     for (let obj of allProdcuts){
//         if (obj.name === productName){            
//             quantity = obj.price  * obj.quantity;
//         }
//     }
//     return quantity;
// };

// const calculateTotalPrice = function (allProdcuts, productName) {
//     let quantity = 0;
//     allProdcuts.forEach(element => {
//         if (element.name === productName){
//             quantity = element.price  * element.quantity;
//         }
//     })
//     return quantity;
// };

// const calculateTotalPrice = function (allProdcuts, productName) {
//     let quantity = 0;
//     allProdcuts
//     .filter(element => element.name === productName)
//     .forEach(element => {
//         quantity = element.price  * element.quantity;
//     })
//     return quantity;
// };

const calculateTotalPrice = function (allProdcuts, productName) {
    return allProdcuts
    .filter(el => el.name === productName)
    .reduce((quantity, element) => quantity + element.price * element.quantity, 0);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

