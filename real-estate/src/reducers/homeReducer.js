import _ from 'lodash';
import { 
    CREATE_HOME,
    FETCH_HOME,
    FETCH_HOMES,
    DELETE_HOME,
    EDIT_HOME
} from '../actions/types';


export default (state={}, action) => {
    switch (action.type) {
        case FETCH_HOME:
            return {...state, [action.payload.id]: action.payload };
        case CREATE_HOME:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_HOMES:
            return {...state, ..._.mapKeys(action.payload)};
        case DELETE_HOME:
            return _.omit(state, action.payload);
        case EDIT_HOME:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}