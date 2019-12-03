import React, { Component } from "react";
import { withToken } from "../utils/hoc";
import { Button, Icon } from "antd-mobile";
import "../Css/find.css";
import login from "../store/action/common";
import { connect } from "react-redux";


@withToken
@connect()
class Mine extends Component {
    state = {
        message: [
            {
                name: "我的信息",
                icon: "icon-xinxi"
            },
            {
                name: "帮助中心",
                icon: "icon-bangzhuzhongxin"
            },
            {
                name: "参与句子控",
                icon: "icon-canyu"
            },
            {
                name: "意见反馈",
                icon: "icon-fankui"
            },
            {
                name: "设置",
                icon: "icon-shezhi"
            },
            {
                name: "第三方绑定",
                icon: "icon-sangeren"
            },
            {
                name: "关于",
                icon: "icon-guanyu"
            }
        ]
    };
    render() {
        console.log(this);

        return (
            <div style={{ height: "100%" }}>
                <h4
                    style={{
                        height: "6%",
                        textAlign: "center",
                        background: "#fb7299",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "14px",
                        lineHeight: "250%"
                    }}
                >
                    账号
                </h4>
                <div className="mine-login">
                    <div style={{ display: "none" }}>
                        <img
                            src="../img/juzi.webp"
                            style={{
                                height: "3rem",
                                width: "3rem"
                            }}
                        ></img>
                        <Button
                            type="primary"
                            inline
                            style={{
                                background: "#fb7299",
                                fontSize: "12px"
                            }}
                            onClick={() => this.props.history.push("/login")}
                        >
                            点击登录
                        </Button>
                    </div>
                    <div
                        className="mine-top"
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-around"
                        }}
                    >
                        <div
                            style={{ borderRadius: "50%", overflow: "hidden" }}
                        >
                            <img src="../img/3.png" />
                        </div>
                        <span
                            style={{
                                width: "35%",
                                fontSize: "24px",
                                fonWeight: "bold"
                            }}
                        >
                            sssss
                        </span>
                        <Button
                            type="primary"
                            inline
                            style={{
                                background: "rgb(243, 234, 234)",
                                fontSize: "12px",
                                color: "#000"
                            }}
                            // onClick={() => this.props.dispatch(login.logout)}
                        >
                            我的主页
                        </Button>
                    </div>
                </div>
                <ul className="mine-nei">
                    {this.state.message.map(item => {
                        return (
                            <li className={"mine-nei-li"} key={item.name}>
                                <i className={`iconfont ${item.icon}`}></i>
                                <p>{item.name}</p>
                                <Icon
                                    type="right"
                                    style={{
                                        position: "absolute",
                                        top: "22%",
                                        right: "2%"
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
export default Mine;
