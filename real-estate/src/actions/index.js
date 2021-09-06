import homes from '../apis/homes';
import { 
    CREATE_HOME,
    FETCH_HOME,
    FETCH_HOMES,
    DELETE_HOME,
    EDIT_HOME
 } from './types';
 import history from '../history';


export const createHome = formValues => async dispatch => {
    const response = await homes.post('/homes', formValues);

    dispatch({ type: CREATE_HOME, payload: response.data });
    history.push('/');
};


export const fetchHomes = () => async dispatch => {
    const response = await homes.get('/homes');

    dispatch({ type: FETCH_HOMES, payload: response.data });
};


export const fetchHome = id => async dispatch => {
    const response = await homes.get(`/homes/${id}`);

    dispatch({ type: FETCH_HOME, payload: response.data });
};


export const editHome = (id, formValues) => async dispatch => {
    const response = await homes.put(`/homes/${id}`, formValues);

    dispatch({ type: EDIT_HOME, payload: response.data });
};


export const deleteHome = id => async dispatch => {
    await homes.delete(`/homes/${id}`);

    dispatch({ type: DELETE_HOME, payload: id });
};
