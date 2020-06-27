import gallery from './gallery-items.js';

const refs = {
    js_gallery: document.querySelector('.js-gallery'),
    js_lightbox: document.querySelector('.js-lightbox'),
    lightbox__image: document.querySelector('.lightbox__image'),
    lightbox__button: document.querySelector('.lightbox__button')
}

const render = (array) => {
    const gallery_li = [];
    const gallery_img = [];
    const gallery_link = [];
    array.forEach((element, index) => {
        gallery_link[index] = document.createElement('a');
        gallery_link[index].className = ('gallery__link');
        gallery_link[index].href = element.original;

        gallery_li[index] = document.createElement('li');
        gallery_li[index].className = 'gallery__item';

        gallery_img[index] = document.createElement('img');
        gallery_img[index].className = ('gallery__image');
        gallery_img[index].src = element.preview;
        gallery_img[index].alt = element.description;
        gallery_img[index].dataset.source = element.original;
        gallery_img[index].dataset.index = index;

        gallery_li[index].appendChild(gallery_link[index]);
        gallery_link[index].appendChild(gallery_img[index]);
        gallery_li.push(gallery_li[index]);
    });
    return gallery_li;
}

const gallery_add_event = () => {
    refs.js_gallery.addEventListener('click', gallery_click);    
}

const gallery_click = (event) =>{
    event.preventDefault();
    if (event.target.nodeName !== 'IMG')
        return;

    refs.js_lightbox.classList.add('is-open');
    refs.lightbox__image.src = event.target.dataset.source;
    refs.lightbox__image.dataset.index = event.target.dataset.index;
    refs.lightbox__button.addEventListener('click', lightbox_close);
    window.addEventListener('keydown', lightbox_keydown);
}

const lightbox_keydown = (event) => {
    switch (event.key) {
        case 'Escape': {
            lightbox_close();
        }
            break;
        case 'ArrowRight': {
            const current_index = refs.lightbox__image.dataset.index;
            if (gallery[Number(current_index) + 1]) {
                refs.lightbox__image.src = gallery[Number(current_index) + 1].original;
                refs.lightbox__image.dataset.index = Number(current_index) + 1;
            }
        }
            break;
        case 'ArrowLeft': {
            const current_index = refs.lightbox__image.dataset.index;
            if (gallery[Number(current_index) - 1]) {
                refs.lightbox__image.src = gallery[Number(current_index) - 1].original;
                refs.lightbox__image.dataset.index = Number(current_index) - 1;
            }
        }
            break;
        default: return;
    }
}

const lightbox_close = () => {
    refs.js_lightbox.classList.remove('is-open');
    refs.lightbox__image.src = '';
    refs.lightbox__button.removeEventListener('click', lightbox_close);
    window.removeEventListener('keydown', lightbox_keydown);
}

refs.js_gallery.append(...render(gallery));
gallery_add_event();
