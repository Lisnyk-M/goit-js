const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const createElements = (parentElement, array) => {
    const liArray = [];

    array.forEach(element => {
        const tmp = document.createElement('li');
        tmp.textContent = element;
        liArray.push(tmp);
    });    
    parentElement.append(...liArray);
}


createElements(document.querySelector('#ingredients'), ingredients);
