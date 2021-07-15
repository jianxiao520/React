import React, { Component } from 'react';
import { Card, Avatar, Button } from 'antd';
import { connect } from 'react-redux';

class ShowInCom extends Component {
    constructor() {
        super()
        this.state = {
            IMG: "/img/IMG_4.png",
            Title: "汪乐平",
            littleTitle: "已经参加竞赛238次",
        }
    }
    render() {
        const { Meta } = Card;
        return (
            <Card
                bordered={false}
                cover={
                    <img
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        alt="example"
                        src={this.state.IMG}
                    />
                }
            >
                <Meta
                    avatar={<Avatar src="/img/AVATAR_1.png" />}
                    title={this.state.Title}
                    description={this.state.littleTitle}
                />
            </Card>
        )
    }
}

export default ShowInCom;
