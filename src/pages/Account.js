import React, { Component } from "react";
import { List } from "antd-mobile";
import "../Css/find.css";
class Account extends Component {
    state = {
        AccountUl: [
            {
                title: "时光轴",
                icon: "icon-shijian"
            },
            {
                title: "最近浏览",
                icon: "icon-liulan"
            },
            {
                title: "我的参与",
                icon: "icon-shuxie"
            },
            {
                title: "我的话题",
                icon: "icon-jinghao"
            },
            {
                title: "搜索句库",
                icon: "icon-sousuo4"
            }
        ],
        sentence: [
            {
                title: "发布的句子",
                icon: "icon-pan_icon",
                Account: "issue"
            },
            {
                title: "喜欢的句子",
                icon: "icon-shoucang4",
                Account: "love"
            },
            {
                title: "收藏的句子",
                icon: "icon-shoucang",
                Account: "collect"
            },
            {
                title: "我的标签",
                icon: "icon-ziyuan",
                Account: "label"
            }
        ]
    };
    goto = name => {
        this.props.history.push(`/collect?name=${name}`);
    };
    render() {
        return (
            <div style={{ height: "93%" }}>
                <h6 className="account-logo">我的句库</h6>
                <ul className="account-ul">
                    {this.state.AccountUl.map(item => {
                        return (
                            <li key={item.icon}>
                                <span>
                                    <i className={`iconfont ${item.icon}`}></i>
                                </span>
                                <p>{item.title}</p>
                            </li>
                        );
                    })}
                </ul>
                <List className="my-list">
                    {this.state.sentence.map(item => {
                        return (
                            <List.Item
                                arrow="horizontal"
                                multipleLine
                                key={item.icon}
                                onClick={this.goto.bind(this, item.Account)}
                            >
                                <span>{item.title}</span>
                                <i className={`iconfont ${item.icon}`}></i>
                            </List.Item>
                        );
                    })}
                </List>
            </div>
        );
    }
}
export default Account;
