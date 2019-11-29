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
    async componentDidMount() {
        let data = await my.get("goods/id", {
            id: '5ddf97497b21000060000f52'
        })
        console.log(data);

    }
    componentDidUpdate() {

        // console.log(111);
        // var submitObj = document.getElementsByClassName('slider-list');.
        // console.log(submitObj);
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
                        beforeChange={(from, to) => {
                            // console.log(from, to);

                            if (to == "9") {
                                // var submitObj = document.getElementsByClassName('slider-list')[0]
                                // console.log(submitObj.style.transform);
                                // document.getElementsByClassName('slider-list')[0].classList.add("ban");
                                // submitObj.style = "transform: translate3d(-0.2px, 0px, 0px)!important;"
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
