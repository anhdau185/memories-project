import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import postsReducer from './postsReducer';
import currentPostReducer from './currentPostReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    posts: postsReducer,
    currentPost: currentPostReducer
});

export default rootReducer;
