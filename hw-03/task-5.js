const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const arrayProperties = [];
  arr.forEach(element => {
    if (prop in element)
      arrayProperties.push(element[prop]);
  });
  return arrayProperties;
};

// const getAllPropValues = function (arr, prop) {
//   const arrayProperties = [];
//   for (let key of arr) {    
//     if (key[prop])
//       arrayProperties.push(key[prop]);
//   }
//   return arrayProperties;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

