const textInput = () => {
    let inputStr = '';
    const input = document.querySelector('input#name-input');
    const output = document.querySelector('span#name-output');

    input.addEventListener('input', (event) => {
        output.textContent = event.target.value.length > 0 ? event.target.value : 'незнакомец';
    })
}

textInput();