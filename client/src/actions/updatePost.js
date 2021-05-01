import * as api from 'api';
import { UPDATE_POST } from 'actions/types';

const updatePost = (id, post, onCompletion = null) => async dispatch => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: UPDATE_POST,
            payload: data.updatedPost
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        if (typeof onCompletion === 'function') {
            onCompletion();
        }
    }
};

export default updatePost;
