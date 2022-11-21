
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);

galleryContainer.addEventListener("click", onGalleryContainerClick);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});

function createGalleryMarkup (galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `
		<div class="gallery__item">
		<a class="gallery__item" href="${original}">
  <img 
	class="gallery__image" 
	src="${preview}" 
	alt="${description}" />
</a>
		</a>
	</div>
	`
	}).join("");

}

function onGalleryContainerClick (e) {
	e.preventDefault();
	const isGalleryImageEl = e.target.classList.contains("gallery__image");
	if(!isGalleryImageEl) {
			return;
	} 

}

