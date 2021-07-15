import { createAccount } from '../service/UserService';

export const userSignInRequest = (userData) => {
    return async dispatch => {
        const res = await createAccount(userData);
        // Success
    }
}