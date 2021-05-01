import { SET_CURRENT_POST } from 'actions/types';

const setCurrentPost = post => ({
    type: SET_CURRENT_POST,
    payload: post
});

export default setCurrentPost;
