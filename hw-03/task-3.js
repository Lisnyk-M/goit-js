const findBestEmployee = function (employees) {
    const keys = Object.keys(employees)
    let bestValue = employees[keys[0]];
    let  BestEmployee = keys[0];


    for (let key of keys){
        if (employees[key] > bestValue){
            bestValue = employees[key];
            BestEmployee = key;
        }
    }
    return BestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux