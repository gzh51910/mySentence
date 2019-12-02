import React, { Component } from 'react';
import { my } from '../Api';
import { Carousel } from "antd-mobile";
import "../Css/choiceness.css";
class Choiceness extends Component {
    state = {
        data: "",
        rgb: '',
    }
    // componentDidMount() {
    //     // simulate img loading
    //     setTimeout(() => {
    //       this.setState({
    //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //       });
    //     }, 100);
    //   }
    async componentDidMount() {

        let { data: { data } } = await my.get("goods/name", {
            name: 10,
            condition: "random"
        })
        this.setState({
            data,
        })
    }
    gg() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
    }
    render() {
        if (this.state.data) {
            return (
                <div style={{ width: "100%", height: "100%" }}>
                    <Carousel
                        autoplay={false}
                        dots={false}
                        infinite
                        vertical
                        style={{ height: "100%" }}
                    >
                        {this.state.data.map((val, index) => (
                            <div key={index}
                                style={{ background: this.gg(), width: "100%", height: "100%", position: "relative" }}
                                onClick={() => this.props.history.push(`/Goods/${val._id}`)
                                }
                            >
                                <h3 style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%,-50%)"
                                }}>{val.content}</h3>
                            </div>
                        ))}
                    </Carousel>
                </div>
            )
        } else {
            return ''
        }
    }
}
export default Choiceness;