import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '28262230-06a9bc056ad9b220b5bf9e6d0';

function fetchPicture(name, page) {
  const response = axios.get(
    `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (!response) {
    return Promise.reject(new Error('There is no picture for that name'));
  }

  return response;
}

const api = { fetchPicture };
export default api;

