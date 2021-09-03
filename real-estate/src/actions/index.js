import homes from '../apis/homes';
import { CREATE_HOME } from './type';


export const createHome = formValues => async dispatch => {
    const response = await homes.post('/homes', formValues);

    dispatch({ type: CREATE_HOME, payload: response.data });
};
