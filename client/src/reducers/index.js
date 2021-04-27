import { combineReducers } from 'redux';
import testDataReducer from './testDataReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    testData: testDataReducer,
    posts: postsReducer
});

export default rootReducer;
