import { galleryItems } from './gallery-items.js';
// Change code below this line
// references
const refs = {
  gallery: document.querySelector('.gallery'),
};

const getItemTemplate = (Item) => {
  const { preview, original, description } = Item;

  // prettier-ignore
  const templateString =
        `<a class="gallery__item" href="${original}" data-arr="test">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;

  return templateString;
};

// making gallery markup
const pictures = galleryItems.map((item) => getItemTemplate(item));
refs.gallery.insertAdjacentHTML('beforeend', pictures.join(''));

// usage SimpleLightbox

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
