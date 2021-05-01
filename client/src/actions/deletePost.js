import * as api from 'api';
import { DELETE_POST } from 'actions/types';

const deletePost = (id, onCompletion = null) => async dispatch => {
    try {
        await api.deletePost(id);
        dispatch({
            type: DELETE_POST,
            payload: id
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        if (typeof onCompletion === 'function') {
            onCompletion();
        }
    }
};

export default deletePost;
