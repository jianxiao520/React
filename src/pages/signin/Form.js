import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Input, Button, Form, message } from "antd";
import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    LoginOutlined
} from "@ant-design/icons";
import { withRouter } from 'react-router-dom';
import PropType from 'prop-types';


class SignIn extends Component {
    constructor(props) {
        super(props);
    }
    static proTypes = {
        userSignInRequest: PropType.func.isRequired
    }
    onFinish = async (value) => {
        message.loading({
            content: '提交注册申请...',
            key: 'Register',
            duration: 0
        });
        // 调用返回
        await this.props.userSignInRequest(value).then(
            res => {
                message.success({
                    content: '注册成功，请去邮箱激活账号！',
                    key: 'Register'
                });
                // 成功跳转
                this.props.history.push({ 
                    pathname: '/activationAccount', 
                    query: { email: value.Email } 
                });
            },
            err => {
                message.error({
                    content: '注册失败: ' + err.response.data.message,
                    key: 'Register'
                });
            }
        );
    }
    render() {
        return (
            <QueueAnim duration={300} className="queue-simple" style={{ width: "100%" }}>
                <div key="e">
                    <Form onFinish={this.onFinish} layout="vertical">
                        <Form.Item
                            name="Email"
                            rules={[
                                {
                                    type: "email",
                                    required: true,
                                    message: '请正确填写邮箱！'
                                }
                            ]}
                        >
                            <Input size="large"
                                placeholder="Email"
                                prefix={<UserOutlined />}
                                className="ScInput"
                            >
                            </Input>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请正确填写密码!'
                                },
                                {
                                    max: 20,
                                    message: '密码不能长于20位'
                                },
                                {
                                    min: 5,
                                    message: '密码最少需要5个字符'
                                }
                            ]}
                        >
                            <Input.Password size="large"
                                placeholder="Password"
                                prefix={<UserOutlined />}
                                className="ScInput"
                                iconRender={visvible => (visvible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            ></Input.Password>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary"
                                style={{ marginTop: "1rem" }}
                                block
                                icon={<LoginOutlined />}
                                shape="round"
                                htmlType="submit"
                            >
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </QueueAnim >);
    }
}

export default withRouter(SignIn);

