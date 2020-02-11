import axios from 'axios';

// GENERAL CONFIGS
export const API_KEY = 'api_key=033a318c330ec85a33f301d55b8d8ab1';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

// AXIOS CONFIG

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instance;
