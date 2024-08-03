import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => `
    <li class="gallery-item gallery-animation">
      <a href="${image.largeImageURL}">
        <figure class="gallery-figure">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
            <figcaption class="gallery-figcaption">
                <ul class="info">
                    <li>Likes: <span>${image.likes}</span></li>
                    <li>Views: <span>${image.views}</span></li>
                    <li>Comments <span>${image.comments}</span></li>
                    <li>Downloads: <span>${image.downloads}</span></li>
                </ul>
            </figcaption>
		</figure>
      </a>
    </li>
  `).join('');

  gallery.innerHTML = markup;
  new SimpleLightbox('.gallery a').refresh();
}

