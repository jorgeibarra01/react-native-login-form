import {EMAIL_CHANGED, PASSWORD_CHANGED,LOGIN_USER_FAILED, FETCHING_USER} from './types';
import firebase from 'firebase';

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

const fetchingUser = () => {
    return {
        type: FETCHING_USER
    }
}

const authError = error => {
    return {
        type: LOGIN_USER_FAILED,
        payload: error
     }
}

export const loginUser = ({email,password}) => {
    return dispatch => {
        // Notify User we are fetching his credentials
        dispatch(fetchingUser())
        // Tell Firebase to signin
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => console.log(user))
            .catch(error => {
                console.log(error);
                dispatch(authError(error.message));
            });
    }
}
