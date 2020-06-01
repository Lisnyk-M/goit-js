const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const createGallery = (parentElement, array) => {

//   const liArray = [];

//   array.forEach(element => {    
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.classList.add('items');
//     img.src = element.url;
//     img.alt = element.alt;
//     li.appendChild(img);
//     liArray.push(li);
//   });
//   parentElement.classList.add('gallery');
//   parentElement.append(...liArray);
//   console.log(...liArray);
// }

// const createGallery = (parentElement, array) => {  
//   let htmlInsert = '';
//   array.forEach(element => htmlInsert += `<li><img src=${element.url} alt="${element.alt}" class="items"></li>`);
//   // console.log(htmlInsert);
//   parentElement.classList.add('gallery');
//   parentElement.insertAdjacentHTML('afterbegin', htmlInsert);  
// }

const createGallery = (parentElement, array) => {
  const resultString = array.reduce((htmlInsert, element) => {
    return htmlInsert + `<li><img src=${element.url} alt="${element.alt}" class="items"></li>`;
  }, '');
  parentElement.classList.add('gallery');
  parentElement.insertAdjacentHTML('afterbegin', resultString);
}

createGallery(document.querySelector('ul#gallery'), images);