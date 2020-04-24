const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length < 17 ? true : false;
}

const isLoginUnique = function (allLogins, login) {
    for (let tmpLogin of allLogins) {
        if (login === tmpLogin)
            return false;
    }
    return true;
}

const addLogin = function (allLogins, login) {
    if (!isLoginValid(login)) {
        return ('Ошибка! Логин должен быть от 4 до 16 символов');
    }

    if (!isLoginUnique(allLogins, login))
        return ('Такой логин уже используется!');
    else {
        logins.push(login);
        return ('Логин успешно добавлен!');
    }   
}

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);