const checkingInput = () => {
  const input = document.querySelector('input#validation-input');
  input.addEventListener('blur', (event) => {    
    if (event.target.value.length == event.target.getAttribute('data-length')) {
      console.log('співпадає');
      if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
      }
      input.classList.add('valid');
    }
    else {
      console.log('не співпадає');
      if (input.classList.contains('valid')) {
        input.classList.remove('valid');
      }
      input.classList.add('invalid');
    }
  })
}


checkingInput();