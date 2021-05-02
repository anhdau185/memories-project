import {
    FETCH_ALL_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from 'actions/types';

const postsReducer = (prevState = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...prevState, action.payload];
        case UPDATE_POST:
        case LIKE_POST:
            return prevState.map(post => post._id === action.payload._id ? action.payload : post);
        case DELETE_POST:
            return prevState.filter(post => post._id !== action.payload);
        default:
            return prevState;
    }
};

export default postsReducer;
