import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemAllGallery = document.querySelector('.gallery');

const ulGallary = document.createElement('ul');
ulGallary.classList.add("ul_gallery");

const cardMark = createPhotoCardMarkUp(galleryItems);
ulGallary.insertAdjacentHTML('beforeend', cardMark);
itemAllGallery.appendChild(ulGallary);

itemAllGallery.addEventListener('click', onItemAllGalleryClick);

function createPhotoCardMarkUp(galleryItems) {
     
    const markUp = galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
               <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
          </a>
      </li>`;
    })
    .join('');
    
    return markUp;  
}

function onItemAllGalleryClick(evt) {
    
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const swatchEl = evt.target;
    const parentImgCard = swatchEl.closest('.gallery__item');

    const urlLargeImg = swatchEl.dataset.source;
    modalOpenClick(urlLargeImg); 
}

function modalOpenClick(largeImg) {
    
    const modalOpen = basicLightbox.create(`<img src="${largeImg}"/>`);
    modalOpen.show();

    window.addEventListener('keydown', onEscapePress);

    function onEscapePress(evt) {
       if (evt.code === 'Escape') {
        modalOpen.close();
       }
    }
}



