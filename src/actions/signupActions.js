import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtdecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constants';

import { loginAccount } from '../service/UserService';
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}


export const userSignupRequest = (userData) => {
    return dispatch => {
        return loginAccount(userData)
            .then(res => {
                // Success
                console.log(res);
                const token = res.data.message;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtdecode(token)));
            });
    }
}