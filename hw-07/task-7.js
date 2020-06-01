const changeFontSize = () => {
    const fontSizeDefault = 16;

    const inputRange = document.querySelector('input#font-size-control');
    const outSpan = document.querySelector('span#text');
    outSpan.style.fontSize = `${fontSizeDefault}px`;
    // console.log('fontSize: ', outSpan.style.fontSize); 

    inputRange.addEventListener('input', (event) => {
        console.log('event.value: ', event.target.value);
        outSpan.style.fontSize = `${event.target.value - 50 + fontSizeDefault}px`;
        console.log('fontSize: ', outSpan.style.fontSize);
    })
}

changeFontSize();