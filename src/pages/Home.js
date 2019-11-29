import React, { Component } from "react";
import { withToken } from "../utils/hoc";
import "../Css/home.css";
import { WingBlank, Carousel } from "antd-mobile";
@withToken
class Home extends Component {
    state = {
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        imgHeight: 500,
    }
    render() {
        return (
            <div className="home">
                <div className="top subside">
                    <h3>精选投稿</h3>
                    <i>1</i>
                </div>
                <div className="mid">
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={30}
                        slideWidth={0.8}
                        dots={false}
                        beforeChange={(from, to) =>
                            console.log(1)

                        }
                        afterChange={index => this.setState({ slideIndex: index })
                        }
                    >
                        {this.state.data.map((val, index) => (
                            <div
                                key={val}
                                href="###"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: ' 0px 5px 20px 5px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img src={`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png`} />
                                {/* <img
                                    src={`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                /> */}

                                <div>{val}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div >
        )
    }
}
export default Home;
