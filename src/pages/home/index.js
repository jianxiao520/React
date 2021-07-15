import React from 'react';
import CarouserlCom from './CarouselCom';
import QuestionsCom from './QuestionsCom';
import ShowInCom from './ShowInCom';
import './index.css';
import { Layout, Row, Col, Calendar } from 'antd';
function App() {
    const { Content } = Layout;
    return (

        <Content style={{ padding: '20px 50px' }}>
            <Row>
                {/* 页面左侧元素 */}
                <Col span={18} style={{ paddingRight: '20px' }}>
                    {/* 轮播图 */}
                    <CarouserlCom />
                    <div className="site-calendar-demo-card" style={{ marginTop: "20px", padding: "10px" }}>
                        {/* 数据列表 */}
                        <QuestionsCom />
                    </div>
                </Col>

                {/* 页面右侧元素 */}
                <Col span={6}>
                    <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} />
                    </div>
                    <div className="site-calendar-demo-card" style={{ marginTop: "20px" }}>
                        <ShowInCom />
                    </div>
                </Col>
            </Row>
        </Content>
    );
}
// const mapStateToProps = (state) => {
//     return {
//         auth: state.auth
//     }
// }
export default App;
