import React, { Component } from 'react';
import { Badge, Row, Col, Tag, Divider, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
// 主题颜色
import 'codemirror/theme/monokai.css';
// 高亮行
import 'codemirror/addon/selection/active-line';
// js代码提示语库
import 'codemirror/addon/hint/javascript-hint';
// 代码提示功能
import 'codemirror/addon/hint/show-hint';
// 代码提示样式
import 'codemirror/addon/hint/show-hint.css';
// 查询题目服务
import { queryQuestionById } from '../../service/QuestionService';

class QuestionInfo extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            html: '',
            difficulty: '',
            amountCompleted: 0,

        }
    }
    componentDidMount() {

        const id  = new URLSearchParams(this.props.location.search).get("id");
        // 请求查询题目详情
        queryQuestionById(id).then(res => {
            this.setState({
                title: res.data.message.title,
                html: res.data.message.html,
                difficulty: res.data.message.difficulty,
                amountCompleted: res.data.message.amountCompleted
            })
        })
    }

    render() {
        return (
            <Content style={{ padding: '20px 50px' }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <UserOutlined />
                        <span>题库</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    {/* 页面左侧元素 */}
                    <Col span={12} style={{ paddingRight: '20px' }}>
                        <div className="site-calendar-demo-card" style={{ marginTop: "20px", padding: "20px" }}>
                            <h1 style={{ fontWeight: "bold" }}>{this.state.title}</h1>
                            <Tag color="red">{this.state.difficulty}</Tag>
                            <Badge count={this.state.amountCompleted}>
                                <Tag color="green">完成人数</Tag>
                            </Badge>
                            <Divider ></Divider>
                            {/* 题目内容 */}
                            <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
                        </div>
                    </Col>


                    {/* 页面左侧元素 */}
                    <Col span={12} style={{ paddingRight: '20px' }}>
                        <div className="site-calendar-demo-card" style={{ marginTop: "20px", padding: "10px" }}>
                            {/* 代码编辑 */}
                            <Code />
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}

// 代码编辑组件
export const Code = () => {
    const Code =
        `/**
    * @param {number[][]} buildings
    * @return {number[][]}
    */
    var getSkyline = function(buildings) {
   
    };`;
    return (
        <CodeMirror
            value={Code}
            options={{
                theme: 'monokai',
                tabSize: 2,
                keyMap: 'sublime',
                mode: 'javascript',
                extraKeys: { "Ctrl": "autocomplete" },
                styleActiveLine: true,
            }}
            height={500}
        />
    )
}
export default QuestionInfo;


// export default QuestionInfo;