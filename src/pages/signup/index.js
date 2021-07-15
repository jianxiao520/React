import React, { Component } from 'react';
import { Button, Row, Col,  Avatar, Tooltip } from "antd";
import { connect } from 'react-redux';
import PropType from 'prop-types';
import './index.css';
import "antd/dist/antd.css"
import {
    UserOutlined,
    ArrowLeftOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import Form from './Form';

import { userSignupRequest } from '../../actions/signupActions';
class SignupPage extends Component {
    static PropType = {
        userSignupRequest: PropType.func.isRequired
    }
    render() {
        return (
            <Row justify="center" align="middle" style={{ minHeight: '80vh',padding:"20px 50px" }}>
                {/* 父组件 */}
                <Col xs={18} sm={12} sm={12} md={12} lg={12} xl={8} className="LoginParent" >
                    {/* 返回首页 */}
                    <Tooltip title="首页" >
                        <Button
                            style={{ marginBottom: "3rem" }}
                            shape="round"
                            type="ghost"
                            icon={<ArrowLeftOutlined />}>
                        </Button>
                    </Tooltip>

                    {/* 去注册页面 */}
                    <Tooltip title="注册">
                        <Button
                            shape="round"
                            type="primary"
                            icon={<UserAddOutlined />}
                            style={{ float: "right" }}
                            onClick={() => this.props.history.push('/signin')}
                        >
                        </Button>
                    </Tooltip>

                    {/* 内部组件 */}
                    <Row justify="center">
                        {/* 小图标 */}
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 120 }}
                            icon={<UserOutlined />}
                            style={{ marginBottom: "3rem" }}
                        />
                        <Form userSignupRequest={this.props.userSignupRequest} />
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default connect(null, { userSignupRequest })(SignupPage);
