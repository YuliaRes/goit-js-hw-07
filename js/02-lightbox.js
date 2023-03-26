import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemAllGallery = document.querySelector('.gallery');

const cardMark = createPhotoCardMarkUp(galleryItems);
itemAllGallery.insertAdjacentHTML('beforeend', cardMark);


function createPhotoCardMarkUp(galleryItems) {
     
    const markUp = galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    })
    .join('');
    
    return markUp;  
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

