import * as api from 'api';
import { FETCH_ALL_POSTS } from 'actions/types';

export default () => async dispatch => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL_POSTS,
            payload: data
        });
    } catch (error) {
        console.error(error.message);
    }
};
