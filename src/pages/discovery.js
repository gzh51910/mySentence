import React, { Component } from "react";
import Dynamic from "./dynamic";
class discovery extends Component {
    state = {
        currentPath: "/home",
        menu: [
            {
                name: "Home",
                path: "/home",
                text: "首页"
            },
            {
                name: "discovery",
                path: "/discovery",
                text: "发现"
            },
            {
                name: "List",
                path: "/list",
                text: "列表页"
            },
            {
                name: "Login",
                path: "/login",
                text: "登录"
            },
            {
                name: "Mine",
                path: "/mine",
                text: "我的"
            },
            {
                name: "Reg",
                path: "/reg",
                text: "注册"
            }
        ]
    };
    render() {
        return (
            <div>
                <Dynamic data={this.state.data} />
            </div>
        );
    }
}
export default discovery;
