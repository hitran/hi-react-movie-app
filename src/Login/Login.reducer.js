import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from './Login.action';

const initialState = {
    load: false,
    data: null,
    error: null
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                load: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case LOGIN_FAIL:
            return {
                ...state,
                load: false,
                error: action.error
            }
        default:
            return state
    }
}