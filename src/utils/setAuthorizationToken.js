import axios from 'axios';

// 设置 请求默认头
const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['token'] = `${token}`;
    }else{
        delete axios.defaults.headers.common['token'];
    }
}

export default setAuthorizationToken;