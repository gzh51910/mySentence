import React, { Component } from "react";
//引入路由
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { TabBar, NavBar, Icon } from 'antd-mobile';
import { my } from './Api';
//引入组件
import Home from "~/Home";
import Find from "~/Find";
import Goods from "~/Goods";
import Add from "~/Add";
import Account from "~/Account";
import Mine from "~/Mine";
import Choiceness from "~/Choiceness";
//引入样式
import "./Css/App.css";
import "./Css/Moren.css"
class App extends Component {
    state = {
        selectedTab: '/home',
        hidden: false,
        fullScreen: true,
        menu: [
            {
                name: "Home",
                path: "/home",
                text: "推荐",
                icon: "icon-home"
            },
            {
                name: "Find",
                path: "/find",
                text: "发现",
                icon: "icon-diqiu1"
            },
            {
                name: "Add",
                path: "/add",
                text: "",
                icon: "icon-jiahao"
            },
            {
                name: "Account",
                path: "/account",
                text: "我的",
                icon: "icon-wenjianjia"
            },
            {
                name: "Mine",
                path: "/Mine",
                text: "账号",
                icon: "icon-zhanghao1"
            }
        ]
    };
    goto = path => {
        let { history } = this.props;
        history.push(path)
    }
    componentDidMount() {
        let bb = this.props.location.pathname;
        if (bb == '/') {
            bb = '/home'
        }
        this.setState({
            selectedTab: bb,
        })
    }
    render() {
        //渲染页面，在里面再添加组件
        let pd = this.props.location.pathname;
        if (pd == "/choiceness") {
            this.state.hidden = true;
        } else {
            this.state.hidden = false;
        }
        return (
            <div className="content">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/find" component={Find} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/add" component={Add} />
                    <Route path="/account" component={Account} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/choiceness" component={Choiceness} />
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="notfound" />
                </Switch>
                <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#fb7299"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        {this.state.menu.map(item => {
                            return <TabBar.Item
                                title={item.text}
                                key={item.path}
                                icon={<i className={`iconfont ${item.icon}`} style={
                                    {
                                        fontSize: "1.6rem"
                                        // background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                                    }}
                                />
                                }
                                selectedIcon={<i className={`iconfont ${item.icon}`} style={{
                                    fontSize: "1.6rem",
                                    color: "#fb7299",
                                    transform: "scale(1.2)",
                                    transition: "transform .18s"
                                    // background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                                }
                                selected={this.state.selectedTab === item.path}
                                onPress={() => {
                                    this.goto(item.path)
                                    this.setState({
                                        selectedTab: item.path,
                                    });
                                }}
                            >
                            </TabBar.Item>
                        })}
                    </TabBar>
                </div>
            </div >
        );
    }
}
App = withRouter(App);
export default App;
