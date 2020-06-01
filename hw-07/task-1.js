const countCategories = () => {
    const ulCategories = document.querySelector('ul#categories');
    console.log(`В списке ${ulCategories.children.length} категории.`);

    const categoriesArr = [];

    Array.from(ulCategories.children).forEach(element => {
        // console.log('Категория: ' + element.querySelector('h2').innerText);        
        // console.log('Количество элементов: ' + element.querySelector('ul').children.length);

        categoriesArr.push({
            'Категория': element.querySelector('h2').innerText,
            'Количество элементов': element.querySelector('ul').children.length
        })
    });
    console.table(categoriesArr);
}

countCategories();