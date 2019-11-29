import React, { Component } from "react";
import Dynamic from "./dynamic";
import { Tabs } from "antd-mobile";
class Find extends Component {
    state = {
        ddd: "动态",
        path: "/home",
        menu: [
            {
                name: "Home",
                path: "/home",
                title: "动态"
            },
            {
                name: "discovery",
                path: "/discovery",
                title: "推荐"
            },
            {
                name: "List",
                path: "/list",
                title: "图文"
            },
            {
                name: "Login",
                path: "/login",
                title: "最新"
            },
            {
                name: "Mine",
                path: "/mine",
                title: "热门"
            },
            {
                name: "Reg",
                path: "/reg",
                title: "情感"
            },
            {
                name: "Reg",
                path: "/reg",
                title: "搞笑"
            },
            {
                name: "Reg",
                path: "/reg",
                title: "生活"
            }
        ]
    };

    highlight = tab => {
        this.setState({
            ddd: tab.title,
            path: tab.path
        });
    };
    render() {
        console.log(6666);
        return (
            <div>
                <Tabs
                    tabs={this.state.menu}
                    tabBarUnderlineStyle={{ borderColor: "#ccc" }}
                    renderTabBar={props => (
                        <Tabs.DefaultTabBar
                            {...props}
                            page={5}
                            onTabClick={this.highlight}
                        />
                    )}
                ></Tabs>
                <Dynamic name={this.state.ddd} path={this.state.path} />
            </div>
        );
    }
}
export default Find;
