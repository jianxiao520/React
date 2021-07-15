import { SET_NAV_INDEX } from '../constants';

export const setNavIndexAction = (index) => {
    return {
        type: SET_NAV_INDEX,
        index
    }
}

export const setNavIndex = (index) => {
    return dispatch => {
        return dispatch(setNavIndexAction(index));
    }
}