import {API_KEY, axiosMovieDBInstance} from "../configurations/config";

export const SEARCH_REQUEST_ACTION = 'SEARCH_REQUEST_ACTION';
export const SEARCH_SUCCESS_ACTION = 'SEARCH_SUCCESS_ACTION';
export const SEARCH_FAIL_ACTION = 'SEARCH_FAIL_ACTION';

const searchRequestAction = () => {
    return {
        type: SEARCH_REQUEST_ACTION
    }
}

const searchSuccessAction = (data) => {
    return {
        data: data,
        type: SEARCH_SUCCESS_ACTION
    }
}

const searchFailAction = (error) => {
    return {
        error: error,
        type: SEARCH_FAIL_ACTION
    }
}


export const searchMovies  = (query) => {
    return async (dispatch) =>  {
        dispatch(searchRequestAction());
        try {
            const searchResult = await axiosMovieDBInstance({
                method: 'GET',
                url: `/search/movie/?${API_KEY}&query=${query}`
            })
            dispatch(searchSuccessAction(searchResult.data.results))
        } catch (error) {
            dispatch(searchFailAction(error));
        }
    }
}