import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Dropdown, Button, Layout, Modal } from 'antd';
import {
    MenuOutlined,
    HomeOutlined,
    SettingOutlined,
    UserOutlined,
    LogoutOutlined,
    SmileOutlined,
    UserAddOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './nav.css';
import { connect } from 'react-redux';


const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/signup">登录</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/signin">注册</Link>
        </Menu.Item>
    </Menu>
);
const { Header } = Layout;
const { SubMenu } = Menu;
class Nav extends Component {
    render() {
        return (
            <div>
                {/* 悬浮导航 */}
                <Dropdown overlay={menu} placement="topLeft" className="Dropdown">
                    <Button type="primary" shape="round" icon={<MenuOutlined />} />
                </Dropdown>
                {/* 顶部导航 */}
                <Header style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                    <NavMenu props={this.props} />
                </Header>
            </div>
        );
    }
}

const confirm = (props) => {
    Modal.confirm({
        title: '您确定要退出登录吗？？',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk() {
            // 浏览器清除字段 jwtToken 的数据
            localStorage.removeItem('jwtToken');
            // 刷新页面
            props.history.go(0);
        }
    });
}

const NavMenu = (p) => {
    // 未登录
    const { props } = p;
    console.log("Nav", props);
    if (props.auth.isAuthenticated) {
        return (
            <Menu theme="light" mode="horizontal" selectedKeys={props.index.Index}>
                <Menu.Item key={1} icon={<HomeOutlined />}>
                    <Link to="/">首页</Link>
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<UserOutlined />} title={props.auth.user.Email}>
                    <Menu.Item key="setting:1" icon={<SettingOutlined />}>个人设置</Menu.Item>
                    <Menu.Item key="setting:2" icon={<LogoutOutlined />} onClick={() => confirm(props)}>退出登录</Menu.Item>
                </SubMenu>
            </Menu>
        )
    } else {
        return (
            <Menu theme="light" mode="horizontal" selectedKeys={props.index.Index}>
                <Menu.Item key={1} icon={<HomeOutlined />}>
                    <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key={2} icon={<SmileOutlined />}>
                    <Link to="/signup">登录</Link>
                </Menu.Item>
                <Menu.Item key={3} icon={<UserAddOutlined />}>
                    <Link to="/signin" >注册</Link>
                </Menu.Item>
            </Menu>
        )
    }
}


// 读取当前导航栏下标
const mapStateToProps = (state) => {
    return {
        index: state.nav,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(Nav));
