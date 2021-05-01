import * as api from 'api';
import { CREATE_POST } from 'actions/types';

const createPost = (post, onCompletion = null) => async dispatch => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: CREATE_POST,
            payload: data.createdPost
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        if (typeof onCompletion === 'function') {
            onCompletion();
        }
    }
};

export default createPost;
