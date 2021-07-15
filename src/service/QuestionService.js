import { request } from './request';
import API from './api';


// 注册服务
export const queryAllQuestion = () => {
    return request(API.QUESTION_QUERYALL, '', 'get');
}

// 登录服务
export const queryQuestionById = (questionId) => {
    return request(`${API.QUESTION_QUERYBYID}?id=${questionId}`, '', 'get');
}


