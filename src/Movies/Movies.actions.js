import axios, {API_KEY} from '../configurations/config';

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

export const getMoviesList = (currentList, page = 1) => {
    return async(dispatch) => {
        dispatch(moviesRequestAction())
        try {
            const result = await axios({
                method: "GET",
                url: `/movie/popular?${API_KEY}&page=${page}`
            })
            dispatch(moviesSuccessAction([...currentList, ...result.data.results]));
        } catch(error) {
            dispatch(moviesFailAction(error));
        }
    }
}