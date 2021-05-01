import { SET_CURRENT_POST, REMOVE_CURRENT_POST } from 'actions/types';

const currentPostReducer = (prevState = null, action) => {
    switch (action.type) {
        case SET_CURRENT_POST:
            return action.payload;
        case REMOVE_CURRENT_POST:
            return null;
        default:
            return prevState;
    }
};

export default currentPostReducer;
