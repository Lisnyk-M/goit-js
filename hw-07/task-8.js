let previousWidth = 30;

const createBoxes = (amount) => {
    let htmlString = ``;
    const divs = [];
    for (let i = 0; i < amount; i++) {        
        const div = document.createElement('div');
        div.classList.add('box-for-task8');
        div.style.width = `${previousWidth + i * 10}px`;
        div.style.height = `${previousWidth + i * 10}px`;
        
        div.style.backgroundColor = `rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)})`;
        divs.push(div);
    }
    previousWidth = previousWidth + amount * 10;    
    document.querySelector('#boxes').append(...divs);
}

//div
const controls = document.querySelector('#controls');
const inputNumber = Array
    .from(controls.children)
    .find(elem => elem.type === 'number');

const buttonCreate = Array
    .from(controls.children)
    .find(elem => elem.type === 'button' && elem.getAttribute('data-action') === "render");

const buttonDestroy = Array
    .from(controls.children)
    .find(elem => elem.type === 'button' && elem.getAttribute('data-action') === "destroy");


buttonCreate.addEventListener('click', () => {
    console.log('inputNumber.value: ', inputNumber.value);
    createBoxes(inputNumber.value);
})

buttonDestroy.addEventListener('click', () => {    
    const divBoxes = document.querySelector('#boxes');
    Array.from(divBoxes.children).forEach(elem => elem.remove());
    previousWidth = 30;
})