let inputCountry = prompt('Введите страну доставки');
let price = 0;

if (!inputCountry)
    alert('Отменено пользователем!')
else {
    let availableCountry = true;
    let countryLowerCase = inputCountry.toLowerCase();

    switch (countryLowerCase) {
        case 'китай'    : price = 100; break;
        case 'чили'     : price = 250; break;
        case 'австралия': price = 170; break;
        case 'индия'    : price = 80;  break;
        case 'ямайка'   : price = 120; break;

        default: availableCountry = false;
    }
    if (!availableCountry)
        alert('В вашей стране доставка не доступна')
    else
    {
        let countryCapytalize = countryLowerCase.substring(0, 1).toUpperCase() + countryLowerCase.substring(1);
        alert(`Доставка в ${countryCapytalize} будет стоить ${price} кредитов`);
    }
}

