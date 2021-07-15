import { Result, Button, message } from 'antd';
// 打开验证邮箱
const verifyEmail = () => {
    // TODO 完成过滤邮箱后缀，做到跳转到不同的网站
    window.open(EmailURL);
}
const SendAgain = () => {
    message.success("发送功能开发中...");
}

const ActivationEmail = (props) => {
    const { email } = props.location.query;
    console.log("验证邮箱->", email);
    // 无效有效则跳转首页
    if (email == undefined) props.history.push('/');
    return (
        <Result
            status="success"
            title="注册成功，请验证邮箱"
            subTitle={`验证邮箱已发送至 ${email} ，请您登录邮箱完成认证！`}
            extra={[
                <Button
                    type="primary"
                    key="console"
                    onClick={verifyEmail}
                >
                    验证邮箱
                </Button>,
                <Button key="buy" onClick={SendAgain}>再发一次</Button>,
            ]}
        />
    )
};
const EmailURL = "http://mail.qq.com";


export default ActivationEmail;