import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setNavIndex } from '../actions/NavigationIndex';
import { message } from 'antd';

const FrontendAuth = (props) => {
    // routerConfig --> 父组件传进来的[routerMap]全部路由列表
    // location     --> 当前 location 信息
    // pathname     --> 当前 location 地址
    console.log("Router props -> ", props);
    const { routerConfig, location } = props;
    const { pathname } = location;
    // 寻找当前地址是否存在于路由地图[routerMap]中
    const targetRouterConfig = routerConfig.find(
        (item) => item.path === pathname
    );
    console.log("-------routerConfig---------", routerConfig);
    console.log("-------location---------", location);
    console.log("-------targetRouterConfig---------", targetRouterConfig);
    // 判断 当前地址是否存在路由中，不存在则返回 404
    if (targetRouterConfig == undefined) {
        return <Redirect to="/404" />
    }

    // 标记导航栏选中，导航栏下标
    switch (pathname) {
        case '/':
            props.setNavIndex('1');
            break;
        case '/signup':
            props.setNavIndex('2');
            break;
        case '/signin':
            props.setNavIndex('3');
            break;
        default:
            props.setNavIndex('1');
    }


    
    // if (props.auth.isAuthenticated && (pathname == '/signup' || pathname == '/signin')) {

    // if (props.auth.isAuthenticated==true && ()) {
    //     // 回去首页

    // }


    // 若未登录 则不可以进入 QuestionInfo activationAccount 页面
    if (props.auth.isAuthenticated == false) {
        if(pathname === '/QuestionInfo'){
            message.info('您未登录，请先登录！');
            return <Redirect to="/" />
        }
    }else if(pathname === '/signup' || pathname === '/signin' || pathname === '/activationAccount'){
        // 若已登录 则不可以进入 signup signin 页面
        message.info('您已登录，请先退出再进来！');
        return <Redirect to="/" />
    }

    return <Route path={pathname} component={targetRouterConfig.component} />
}
const mapStateToProps = (state) => () => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { setNavIndex })(FrontendAuth);