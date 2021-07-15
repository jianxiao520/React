
import { SET_NAV_INDEX } from '../constants';

// 默认值
const initialState = {
    Index: '1'
}

const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NAV_INDEX:
            return {
                Index: action.index
            }
        default: return state;
    }
}

export default auth;