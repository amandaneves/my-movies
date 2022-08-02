import axios from "axios";

const API_KEY = '12c1f7512fc3289a67df51cb6ed9dce5';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}