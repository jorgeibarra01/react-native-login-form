import { combineReducers } from 'redux';
import ExampleReducer from './ExampleReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    example: ExampleReducer,
    auth: AuthReducer
});