let total = 0;
let enterNumber;

do {
    enterNumber = prompt('введите число');

    if (Number.isNaN(Number(enterNumber))) {
        alert('Было введено не число, попробуйте еще раз');
    }
    else {
        total += Number(enterNumber);
    }
} while (enterNumber);

alert(`Общая сумма чисел равна ${total}`);