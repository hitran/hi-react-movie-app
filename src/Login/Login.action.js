import firebase from 'firebase';
import { provider, axiosFirebaseInstance } from '../configurations/config';

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
            if (result.credential.accessToken) {
                let user = {};
                // check if current user id already exists in db
                let data = await axiosFirebaseInstance({
                    method: 'GET',
                    url: `users/${result.user.uid}.json`
                })
                
                if (!data.data) {
                    // user hasn't been created in db: add new user
                    user = {
                        name: result.user.displayName,
                        photo: result.user.photoURL,
                        userId: result.user.uid,
                        wishList: null
                    }
                    await axiosFirebaseInstance({
                        method: 'POST',
                        url: `users/${user.userId}.json`,
                        data: user
                    })
                } else {
                    // retrieve user info from db
                    user = Object.values(data)[0]
                }
                console.log(user);
                dispatch(loginSuccessAction(user));
            }
        } catch (error) {
            dispatch(loginFailAction(error));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
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

export const updateUserInfo = (data) => {
    return async(dispatch) => {
        dispatch(loginRequestAction())
        try {
            const update = await axiosFirebaseInstance({
                method: 'PUT',
                url: `users/${data.userId}.json`,
                data: data
            })
            dispatch(loginSuccessAction(data))
        } catch(error) {
            dispatch(loginFailAction(error))
        }
    }
}