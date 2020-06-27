let counterValue = 0;
const click = (event) => {
    if (event.target.getAttribute('data-action') === 'increment') {
        counterValue++;
    }
    if (event.target.getAttribute('data-action') === 'decrement') {
        counterValue = counterValue > 0 ? counterValue - 1 : 0;
    }
    
    document.querySelector('#value').textContent = counterValue;
}

const buttons = document.querySelectorAll('button');
Array.from(buttons).forEach(el => el.addEventListener('click', click));

