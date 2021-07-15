import { request } from './request';
import API from './api';


// 注册服务
export const createAccount = (Form) => {
    return request(API.ACCOUNT_SIGNIN, Form, 'post');
}

// 登录服务
export const loginAccount = (Form) => {
    return request(API.ACCOUNT_SIGNUP, Form, 'post');
}

// 校验 TOKEN 服务
export const verifyUserAccount = () => {
    return request(API.ACCOUNT_VERIFY, '', 'get');
}


