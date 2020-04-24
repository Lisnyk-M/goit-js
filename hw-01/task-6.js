// let total = 0;
// let enterNumber;

// do {
//     enterNumber = prompt('введите число');

//     if (Number.isNaN(Number(enterNumber))) {
//         alert('Было введено не число, попробуйте еще раз');
//     }
//     else {
//         total += Number(enterNumber);
//     }
// } while (enterNumber);

// alert(`Общая сумма чисел равна ${total}`);


let d= [2, 3, '7', 67, 90];
console.log(d.find(function(el, index){
    if (el === '7')
        return index;
}) )