import {WISH_LIST_REQUEST, WISH_LIST_SUCCESS, WISH_LIST_FAIL} from './WishList.action';

const initialState = {
    load: false,
    data: [],
    error: null
}

export default function wishListReducer (state = initialState, action) {
    switch (action.type) {
        case WISH_LIST_REQUEST:
            return {
                ...state,
                load: true
            }
        case WISH_LIST_SUCCESS:
            return {
                ...state,
                load: false,
                data: action.data
            }
        case WISH_LIST_FAIL:
            return {
                ...state,
                load: false,
                error: action.error
            }
        default:
            return state
    }
}