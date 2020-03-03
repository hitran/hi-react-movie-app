import {API_KEY, axiosMovieDBInstance} from '../configurations/config';

export const MOVIES_REQUEST_ACTION = 'MOVIES_REQUEST_ACTION';
export const MOVIES_SUCCESS_ACTION = 'MOVIES_SUCCESS_ACTION';
export const MOVIES_FAIL_ACTION = 'MOVIES_FAIL_ACTION';


const moviesRequestAction = () => {
    return({
        type: MOVIES_REQUEST_ACTION
    })
}

const moviesSuccessAction = (data) => {
    return({
        type: MOVIES_SUCCESS_ACTION,
        data: data
    })
}

const moviesFailAction = (error) => {
    return({
        type: MOVIES_FAIL_ACTION,
        error: error
    })
}

export const getMoviesList = (currentData, page = 1) => {
    return async(dispatch) => {
        dispatch(moviesRequestAction())
        try {
            const data = {...currentData};
            const popularResult = await axiosMovieDBInstance({
                method: "GET",
                url: `/movie/popular?${API_KEY}&page=${page}`
            })
            const topRatedResult = await axiosMovieDBInstance({
                method: "GET",
                url: `/movie/top_rated?${API_KEY}&page=${page}`
            })
            data.popularMovies = popularResult.data.results;
            data.topRatedMovies = topRatedResult.data.results;
            dispatch(moviesSuccessAction(data));
        } catch(error) {
            dispatch(moviesFailAction(error));
        }
    }
}

