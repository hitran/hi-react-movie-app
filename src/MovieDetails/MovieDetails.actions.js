import {API_KEY, axiosMovieDBInstance} from '../configurations/config';
export const MOVIE_DETAILS_REQUEST_ACTION = 'MOVIE_DETAILS_REQUEST_ACTION';
export const MOVIE_DETAILS_SUCCESS_ACTION = 'MOVIE_DETAILS_SUCCESS_ACTION';
export const MOVIE_DETAILS_FAIL_ACTION = 'MOVIE_DETAILS_FAIL_ACTION';

const movieDetailsRequestAction = () => {
    return {
        type: MOVIE_DETAILS_REQUEST_ACTION
    }
}

const movieDetailsSuccessAction = (data) => {
    return {
        type: MOVIE_DETAILS_SUCCESS_ACTION,
        data: data
    }
}

const movieDetailsFailAction = (error) => {
    return {
        type: MOVIE_DETAILS_FAIL_ACTION,
        error: error
    }
}

export const getMovieDetails = (movieId) => {
    return async(dispatch) => {
        dispatch(movieDetailsRequestAction());
        try {
            const result = await axiosMovieDBInstance({
                method: 'GET',
                url: `/movie/${movieId}?${API_KEY}`
            });
            dispatch(movieDetailsSuccessAction(result.data));
        } catch(error) {
            dispatch(movieDetailsFailAction(error));
        }
    }
}