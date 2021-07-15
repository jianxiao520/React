import React, { Component } from 'react';
import Routers from '../routers';
import Nav from './nav/nav';
import { Layout, Row, Col } from 'antd';
class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { Footer } = Layout;
        return (
            <div>
                <Layout className="layout">
                    <Row justify="center">
                        <Col span={20}>
                            {/* 导航栏 */}
                            <Nav />
                            {/* 主要内容 */}
                            {Routers}
                        </Col>
                    </Row>
                    <Footer style={{ textAlign: 'center' }}>Copyright www.Hzzzzz.com.All Rights Reserved.</Footer>
                </Layout>
            </div>
        );
    }
}
export default Index;