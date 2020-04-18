let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let inputString = prompt('введите количество дроидов которые вы хотите купить');
if (!inputString)
    alert('Отменено пользователем!')
else {
    let countDroid = Number.parseInt(inputString);
    
    if (!Number.isNaN(countDroid) && countDroid > 0) {
        totalPrice = countDroid * pricePerDroid;
        if (totalPrice > credits)
            alert('Недостаточно средств на счету!')
        else
            alert(`Вы купили ${countDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
    else alert('Введны не коректные данные');
}