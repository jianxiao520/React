// 定义API的文件

const USER_API = 'user';
const QUESTION_API = 'question';


const base = {
    // USER 类
    ACCOUNT_SIGNIN : `/${USER_API}/create`,                    // 注册账户接口
    ACCOUNT_SIGNUP : `/${USER_API}/login`,                     // 登录账户接口
    ACCOUNT_VERIFY : `/${USER_API}/verifyUser`,                // 校验账户接口

    // QUESTION 类
    QUESTION_QUERYALL : `/${QUESTION_API}/queryAllQuestion`,   // 查询全部题目接口
    QUESTION_QUERYBYID : `/${QUESTION_API}/queryQuestionById`, // 根据ID查询题目接口
}

export default base;





