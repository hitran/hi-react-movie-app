import firebase from 'firebase';
import { provider } from '../configurations/config';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const loginRequestAction = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const loginSuccessAction = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data: data
    }
}

const loginFailAction = (error) => {
    return {
        type: LOGIN_FAIL,
        error: error
    }
}

export const login = () => {
    return async (dispatch) => {
        dispatch(loginRequestAction());
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result);
            if (result.credential.accessToken) {
                const user = {
                    name: result.user.displayName,
                    photo: result.user.photo
                }
                dispatch(loginSuccessAction(user));
            }
        } catch(error) {
            dispatch(loginFailAction(error));
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        dispatch(loginRequestAction());
        try {
            const result = await firebase.auth().signOut();
            if (result === undefined) {
                dispatch(loginSuccessAction(null));
            }
        } catch (error) {
            dispatch(loginFailAction(error));
        }
    }
}