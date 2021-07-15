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

// 类型检查库
import PropType from 'prop-types';


class SignForm extends Component {
    static proTypes = {
        userSignupRequest: PropType.func.isRequired
    }
    onFinish = (value) => {
        message.loading({
            content: '登录中...',
            key: 'Login',
            duration: 0
        });
        // 调用返回
        this.props.userSignupRequest(value).then(
            res => {
                message.success({
                    content: '登录成功',
                    key: 'Login'
                });
                this.props.history.push('/');
            },
            err => {
                message.error({
                    content: '失败: ' + err.response.data.message,
                    key: 'Login'
                });
            }
        );
    }
    render() {
        return (
            <QueueAnim delay={300} className="queue-simple" style={{ width: "100%" }}>
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
                                className="ScInput">
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

                            >
                            </Input.Password>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary"
                                style={{ marginTop: "1rem" }}
                                block
                                icon={<LoginOutlined />}
                                shape="round"
                                htmlType="submit"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </QueueAnim >);
    }
}
export default withRouter(SignForm);