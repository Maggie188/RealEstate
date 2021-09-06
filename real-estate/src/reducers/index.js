import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import homeReducer from './homeReducer';



export default combineReducers({
    form: reducer,
    homes: homeReducer
});