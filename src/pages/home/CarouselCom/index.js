import React, { Component } from 'react';
import { Carousel, Image } from 'antd';
class CarouserlCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [
                "/img/IMG_1.png",
                "/img/IMG_2.png",
                "/img/IMG_3.png",
            ]
        }
    }
    render() {
        return (
            <Carousel autoplay>
                {
                    this.state.img.map((item, key) => {
                        return (
                            <div key={key}>
                                <Image src={item} width="100%" />
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
}

export default CarouserlCom;