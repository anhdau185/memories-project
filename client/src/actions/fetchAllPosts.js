import * as api from 'api';
import { FETCH_ALL_POSTS } from 'actions/types';

const fetchAllPosts = (onCompletion = null) => async dispatch => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL_POSTS,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        if (typeof onCompletion === 'function') {
            onCompletion();
        }
    }
};

export default fetchAllPosts;
