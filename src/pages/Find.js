import React, { Component } from "react";
import Dynamic from "./dynamic";
import { Tabs, SearchBar } from "antd-mobile";
import '../Css/Find.css'
class Find extends Component {
    state = {
        title: "最新",
        name: "newest",
        menu: [
            {
                name: "newest",
                path: "/home",
                title: "最新"
            },
            {
                name: "hot",
                path: "/login",
                title: "热门"
            },
            {
                name: "original",
                path: "/mine",
                title: "原创"
            },
            {
                name: "emotion",
                path: "/reg",
                title: "情感"
            },
            {
                name: "ana",
                path: "/reg",
                title: "语录"
            },
            {
                name: "live",
                path: "/discovery",
                title: "生活"
            },
            {
                name: "love",
                path: "/list",
                title: "歌词"
            },

            {
                name: "jottings",
                path: "/reg",
                title: "随笔"
            },
            {
                name: "poetry",
                path: "/reg",
                title: "诗词"
            }
        ]
    };

    highlight = tab => {
        this.setState({
            title: tab.title,
            name: tab.name
        });
    };
    uuu = value => {
        console.log(value);
    };
    render() {
        return (
            <div style={{height:'80%'}}>
                <div
                    style={{
                        backgroundColor: "#fb7299",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontSize: 16,
                            fontWeight: "inherit"
                        }}
                    >
                        发现
                    </span>
                    <SearchBar
                        placeholder="搜你想要搜的"
                        maxLength={8}
                        cancelText="搜索"
                        onChange={this.uuu}
                    />
                </div>
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

                <Dynamic title={this.state.title} name={this.state.name} />
            </div>
        );
    }
}
export default Find;
