import React, { Component } from "react";
import { withToken } from "../utils/hoc";
import "../Css/home.css";
import { Carousel } from "antd-mobile";
import { my } from '../Api';
@withToken

class Home extends Component {
    state = {
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        imgHeight: 500,
    }
    // async componentDidMount() {
    //     let data = await my.get("goods/id", {
    //         id: '5ddf97497b21000060000f52'
    //     })
    //     console.log(data);

    // }
    render() {
        return (
            <div className="home">
                <div className="top subside">
                    <h3>精选投稿</h3>
                    <i className="iconfont icon-diqiu1"></i>
                </div>
                <div className="mid">
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={20}
                        slideWidth={0.8}
                        dots={false}
                        beforeChange={(from, to) => {
                            // console.log(1);

                            if (to == "9") {
                                // var submitObj = document.getElementsByClassName('slider-list')[0]
                                // // // document.getElementsByClassName('slider-list')[0].classList.add("ban");
                                // submitObj.style.cssText += "transform: translate3d(0px, 0px, 0px)!important;"
                            }
                        }

                        }
                        afterChange={index => this.setState({ slideIndex: index },
                            console.log(1)

                        )
                        }
                    >
                        {this.state.data.map((val, index) => (
                            <div
                                key={val}
                                href="###"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -15 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: ' 0px 5px 20px 5px rgba(0, 0, 0, 0.2)',
                                    borderRadius: "5%",
                                    overflow: "hidden"
                                }}
                            >
                                <img src={`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png`} />
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
