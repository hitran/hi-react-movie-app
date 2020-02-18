export const WISH_LIST_REQUEST = 'WISH_LIST_REQUEST';
export const WISH_LIST_SUCCESS = 'WISH_LIST_SUCCESS';
export const WISH_LIST_FAIL = 'WISH_LIST_FAIL';


const wishListRequestAction = () => {
    return {
        type: WISH_LIST_REQUEST
    }
}

const wishListSuccessAction = (data) => {
    return {
        type: WISH_LIST_SUCCESS,
        data: data
    }
}

const wishListFailAction = (error) => {
    return {
        type: WISH_LIST_FAIL,
        error: error
    }
}

export const addToWishList = (data) => {
    return (dispatch) => {
        dispatch(wishListRequestAction())
        try {
            dispatch(wishListSuccessAction(data))
        } catch (error){
            dispatch(wishListFailAction(error))
        }
    }
}