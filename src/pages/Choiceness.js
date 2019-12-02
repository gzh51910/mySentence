import React, { Component } from 'react';
import { my } from '../Api';
var color = { color: 'red' }
class Choiceness extends Component {
    state = {
        data: "",
        rgb: ''
    }
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
                    {this.state.data.map((val, index) => (
                        <div key={index} style={{ background: this.gg(), width: "100%", height: "100%", position: "relative" }}>
                            <h3 style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>{val.content}</h3>
                        </div>
                    ))}
                </div>
            )
        } else {
            return ''
        }
    }
}
export default Choiceness;