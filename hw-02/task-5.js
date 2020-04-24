const checkForSpam = function (message) {
    const spamFinded =  message.toLowerCase().includes('spam');
    const saleFinded =  message.toLowerCase().includes('sale');
    return spamFinded || saleFinded ? true : false;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

