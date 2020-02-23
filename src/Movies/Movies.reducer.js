import {MOVIES_REQUEST_ACTION, MOVIES_SUCCESS_ACTION, MOVIES_FAIL_ACTION} from './Movies.actions';


const initialState = {
    load: false,
    data: {
        popularMovies: [],
        topRatedMovies: []
        
    },
    error: null
}

export default function moviesReducer (state = initialState, action) {
    switch (action.type) {
        case MOVIES_REQUEST_ACTION:
            return {
                ...state,
                load: true
            }
        case MOVIES_SUCCESS_ACTION:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case MOVIES_FAIL_ACTION:
            return {
                ...state,
                load: false,
                error: action.error
            }
        default:
            return state
    }

}