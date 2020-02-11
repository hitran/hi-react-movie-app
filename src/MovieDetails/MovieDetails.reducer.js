import {MOVIE_DETAILS_REQUEST_ACTION, MOVIE_DETAILS_SUCCESS_ACTION, MOVIE_DETAILS_FAIL_ACTION} from './MovieDetails.actions';

const initialState = {
    load: false,
    data: null,
    error: null
}
export default function movieDetailsReducer(state = initialState, action){
    switch (action.type) {
        case MOVIE_DETAILS_REQUEST_ACTION:
            return {
                ...state,
                load: true
            }
        case MOVIE_DETAILS_SUCCESS_ACTION:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case MOVIE_DETAILS_FAIL_ACTION:
            return {
                ...state,
                load: false,
                error: action.error
            }
        default:
            return state
    }
}