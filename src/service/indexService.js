// import axios from 'axios';
import { message } from 'antd';
// 设置 axios 附加 Header
import setAuthorizationToken from '../utils/setAuthorizationToken';
// jwt 解码
import jwtdecode from 'jwt-decode';
// 登录信息 Action
import { setCurrentUser } from '../actions/signupActions';
// 导入域名
// import { LOCALHOST } from '../config/Service';

import { verifyUserAccount } from '../service/UserService';
// 处理 Token -> 判断浏览器中 Token 的有效性。
// 有效 -> 写入 axios 的默认 Header 中 且将其中的 ·载荷· 写入 store
// 无效 -> 清空当前浏览器中的 Token

export default (store) => {
    if (localStorage.jwtToken) {
        // localStorage 中有 token 则发送此 token 至服务器查询其有效性。
        setAuthorizationToken(localStorage.jwtToken);

        // 携带 Token 至 Header 访问服务器 校验其有效性

        verifyUserAccount().then(res => {
            // 正常校验则写入Store
            store.dispatch(
                setCurrentUser(jwtdecode(localStorage.jwtToken))
            );
        }).catch(error => {
            // 清空默认 Header
            setAuthorizationToken();
            // 浏览器清除字段 jwtToken 的数据
            localStorage.removeItem('jwtToken');
            message.error("您的登录状态已过期，请重新登录！");
        });
    }
}