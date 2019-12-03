import React, { Component } from "react";
import { withToken } from "../utils/hoc";
import "../Css/home.css";
import { Carousel } from "antd-mobile";
import { my } from '../Api';
@withToken

class Home extends Component {
    state = {
        data: "",
        imgHeight: 500,
    }
    async componentDidMount() {
        // this.props.bb("hhhhhh")

        let { data: { data } } = await my.get("goods/name", {
            name: 10,
            condition: "random"
        })
        this.setState({
            data
        });
    }

    render() {
        if (this.state.data) {
            return (
                <div className="home">
                    <div className="top subside">
                        <h3 onClick={() => this.props.bb("哈哈哈")}>精选投稿</h3>
                        <i className="iconfont icon-diqiu1" onClick={() => this.props.history.push('/choiceness')
                        }></i>
                    </div>
                    <div className="mid">
                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={20}
                            slideWidth={0.8}
                            dots={false}
                            beforeChange={(from, to) => { }}
                            afterChange={index => this.setState({ slideIndex: index })}>
                            {this.state.data.map((val, index) => (
                                < div
                                    key={val}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -15 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: ' 0px 0px 0px 2px rgba(0, 0, 0, 0.2)',
                                        borderRadius: "5%",
                                        overflow: "hidden"
                                    }}>
                                    <img src={val.cover} onClick={() => this.props.history.push(`/goods/${val._id}`)
                                    } />
                                    <p className="char" onClick={() => this.props.history.push(`/goods/${val._id}`)
                                    }>{val.content}</p>
                                    <div className="btm">
                                        <i className="iconfont icon-shoucang4"><span>{val.reputation}</span></i>
                                        <i className="iconfont icon-xinxi"><span>3</span></i>
                                        <i className="iconfont icon-shoucang"></i>
                                        <i className="iconfont icon-zhuanfa"></i>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div >
            )
        } else {
            return ''
        }
    }
}
export default Home;
