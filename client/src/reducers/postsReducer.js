import { FETCH_ALL_POSTS, CREATE_POST } from 'actions/types';

const postsReducer = (prevState = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...prevState, action.payload];
        default:
            return prevState;
    }
};

export default postsReducer;
