import * as api from 'api';
import { LIKE_POST } from 'actions/types';

const likePost = (id, onCompletion = null) => async dispatch => {
    try {
        const { data } = await api.likePost(id);
        dispatch({
            type: LIKE_POST,
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

export default likePost;
