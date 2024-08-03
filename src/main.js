import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import debounce from 'lodash.debounce';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
const loader = document.querySelector('.loader');

// form.addEventListener('submit', debounce(onSearch, 300));

form.addEventListener('submit', event => { 
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.info({
      title: 'Info',
      position: 'topRight',
      message: 'Please enter a value in the search field!',
      timeout: 3000,
    });
    return;
  }

  loader.style.display = 'block';
  fetchImages(query)
    .then(data => {
      loader.style.display = 'none';
      iziToast.success({
        title: 'Success',
        position: 'topRight',
        message: `Hooray! We found ${data.totalHits} images.`,
        timeout: 3000,
      });
      renderGallery(data.hits);
    })
    .catch(error => {
      loader.style.display = 'none';
      if (error.message == 'No images found') {
        iziToast.warning({
          icon: 'svg',
          iconUrl: './img/warning.svg',
          title: 'Warning',
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          timeout: 3000,

        });
      } else {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message: 'Sorry, there is no connection to the server. Please try again later!',
          timeout: 3000,
        });
      }
    });
});


