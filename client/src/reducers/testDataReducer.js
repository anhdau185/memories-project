import { INCREMENT_TEST_DATA } from 'actions/types';

const testDataReducer = (prevState = 0, action) => {
    switch (action.type) {
        case INCREMENT_TEST_DATA:
            return prevState + 1;
        default:
            return prevState;
    }
};

export default testDataReducer;
