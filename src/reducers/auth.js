import { SET_CURRENT_USER,SET_TEST_MESSAGE } from '../constants';
import isEmpty from 'lodash/isEmpty';

// 默认值
const initialState = {
    // 是否已登录
    isAuthenticated: false,
    // 登录用户信息
    user: {},
}

const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default: return state;

    }
}

export default auth;