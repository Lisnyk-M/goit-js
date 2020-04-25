
let input = 0;
let enterNumber;
let numbers = [];
let total = 0;

do {
    enterNumber = prompt('введите число');

    if (Number.isNaN(Number(enterNumber))) {
        alert('Было введено не число, попробуйте еще раз');
    }
    else {
        input = Number(enterNumber);
        numbers.push(input);
    }
} while (enterNumber);

for (let number of numbers){
    total += number;
}

alert(`Общая сумма чисел равна ${total}`);

