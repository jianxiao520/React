import { LOCALHOST } from '../../config/Service';
import axios from "axios";
import Qs from 'qs';

// 简单封装 HTTP 请求，自动附加域名
export const request = (Url_, Params_ = '', Method_ ) => {
    return axios({
        method: Method_,
        url: `${LOCALHOST}${Url_}`,
        data: Method_.toLowerCase() === 'post' ? Qs.stringify(Params_) : '',
    })
}