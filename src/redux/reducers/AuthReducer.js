import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_FAILED, FETCHING_USER, LOGIN_USER_SUCCESS} from '../actions/types';

const initialState = {
    email: '',
    password: '',
    isLoading: false,
    error: ''
}

export default (state = initialState,action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            console.log(action);
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            console.log(action);
            return {
                ...state,
                password: action.payload
            };
        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                ...initialState
            }
        case FETCHING_USER:
            return {
                ...state,
                password: '',
                isLoading: true,
                error: ''
            }
        case LOGIN_USER_FAILED:
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
        default:
            return state;
    }
};