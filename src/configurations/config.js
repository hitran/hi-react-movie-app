import axios from 'axios';
import firebase from 'firebase';

// GENERAL CONFIGS
export const API_KEY = 'api_key=033a318c330ec85a33f301d55b8d8ab1';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
export const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';

// AXIOS CONFIG
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

// FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyByVArpoPwURfJrGgiO00eAB1J3TxfJWBI",
    authDomain: "hi-reactjs-movie-app.firebaseapp.com",
    databaseURL: "https://hi-reactjs-movie-app.firebaseio.com",
    projectId: "hi-reactjs-movie-app",
    storageBucket: "hi-reactjs-movie-app.appspot.com",
    messagingSenderId: "541042249141",
    appId: "1:541042249141:web:20a84f674a7b26bbaa5dfc",
    measurementId: "G-YBDZBSEQ52"
};

export function firebaseInit() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default instance;
