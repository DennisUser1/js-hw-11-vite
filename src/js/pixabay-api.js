const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45195508-74bd54d08c443e52e59ea1f0e'; 

// const url = `${BASE_URL}?key=${API_KEY}&q=${urlQueryValue}&image_type=photo&orientation=horizontal&safesearch=true`;
export function fetchImages(urlQueryValue) {
    const paramsSearch = new URLSearchParams({ 
    key: API_KEY,
    q: urlQueryValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
}); 

const url = `${BASE_URL}?${paramsSearch.toString()}`;

return fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  if (data.totalHits == 0) {
    throw new Error('No images found');
  }
  return data;
});
};