import {SEARCH_REQUEST_ACTION, SEARCH_SUCCESS_ACTION, SEARCH_FAIL_ACTION} from './Search.action';

const initialState = {
    load: false,
    data: [],
    error: null
}

export default function searchReducer (state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST_ACTION:
            return {
                ...state,
                load: true
            }
        case SEARCH_SUCCESS_ACTION:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case SEARCH_FAIL_ACTION:
            return {
                ...state,
                load: false,
                error: action.error
            }
        default:
            return state
    }
}