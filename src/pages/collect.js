import React, { Component } from "react";
import { Icon } from "antd-mobile";
class collect extends Component {
    state = {
        acc: "",
        data: [
            {
                title: "我的发布",
                icon: "icon-pan_icon",
                Account: "issue"
            },
            {
                title: "我的喜欢",
                icon: "icon-shoucang4",
                Account: "love"
            },
            {
                title: "我的收藏",
                icon: "icon-shoucang",
                Account: "collect"
            },
            {
                title: "我的标签",
                icon: "icon-ziyuan",
                Account: "label"
            }
        ],
        datas: [
            {
                title: "有时候一点点的新年,可以走很长的路"
            }
        ]
    };
    componentDidMount() {
        let name = this.props.location.search.substr(1).split("=");
        this.state.acc = name[1];
        this.forceUpdate();
    }
    goto = () => {
        this.props.history.go(-1);
    };
    render() {
        if (this.state.acc != "") {
            return (
                <div style={{ height: "100%" }}>
                    {this.state.data.map(item => {
                        if (item.Account == this.state.acc) {
                            return (
                                <div key={item.Account}>
                                    <h4
                                        style={{
                                            height: "6%",
                                            textAlign: "center",
                                            background: "#fb7299",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            lineHeight: "250%",
                                            position: "relative"
                                        }}
                                    >
                                        <Icon
                                            type={"left"}
                                            style={{
                                                position: "absolute",
                                                top: "10%",
                                                left: "0"
                                            }}
                                            size={"lg"}
                                            onClick={this.goto}
                                        />
                                        <span>{item.title}</span>
                                    </h4>
                                    <h5
                                        style={{
                                            padding: "10px",
                                            fontSize: "14px",
                                            background: "rgb(243, 236, 236)"
                                        }}
                                    >
                                        <span>{item.title}</span>
                                        <i
                                            style={{
                                                color: "#999",
                                                marginLeft: 5
                                            }}
                                        >
                                            (共{this.state.datas.length}条)
                                        </i>
                                    </h5>
                                </div>
                            );
                        } else {
                            <div></div>;
                        }
                    })}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
export default collect;
