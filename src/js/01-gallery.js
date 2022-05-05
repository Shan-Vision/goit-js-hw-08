// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallerySortItems = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  `;
};

const gallerySortMarkup = galleryItems.map(gallerySortItems).join('');

const galleryItemsList = document.querySelector(".gallery");

galleryItemsList.insertAdjacentHTML('beforeend', gallerySortMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,

});

console.log(galleryItems);
