const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('для входа в панель управления введите пароль');
if (!password)
    message = 'Отменено пользователем!'
else {
    if (password === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!'
    }
    else
        message = 'Доступ запрещен, неверный пароль!';
}

alert(message);