import { galleryItems } from './gallery-items.js';
// Change code below this line
let modalHTML = `<div class="modal"></div>`;

const instance = basicLightbox.create(modalHTML, {
  onShow: () => {
    window.addEventListener('keydown', onModalClose);
    console.log('modal is show');
  },

  onClose: () => {
    window.removeEventListener('keydown', onModalClose);
    console.log('modal is close');
  },
});

// references
const refs = {
  gallery: document.querySelector('.gallery'),
  modal: instance.element().querySelector('.modal'),
};

//functions

function onModalClose(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  setTimeout(() => {
    refs.modal.innerHTML = '';
  }, 300);
}

const getItemTemplate = (Item) => {
  const { preview, original, description } = Item;

  // prettier-ignore
  const templateString = 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;

  return templateString;
};

// making gallery markup
const pictures = galleryItems.map((item) => getItemTemplate(item));
refs.gallery.insertAdjacentHTML('beforeend', pictures.join(''));

// listeners
refs.gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    console.log(`you click ${event.target.nodeName}`);
    return;
  }

  // prettier-ignore
  modalHTML = `<img
                src="${event.target.dataset.source}"
                alt="${event.target.alt}"
                />`;
  refs.modal.innerHTML = modalHTML;
  instance.show();
});
