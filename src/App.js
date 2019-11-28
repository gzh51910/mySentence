import React, { Component } from 'react';
//引入路由
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
//引入组件
import Home from '~/Home';
import Find from '~/Find';
import Goods from '~/Goods';
import Add from '~/Add';
import Account from '~/account';
import Mine from '~/Mine';
//引入样式
import './Css/App.css'
class App extends Component {
    renderContent(pageText) {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/find" component={Find} />
                    <Route path="/goods:id" component={Goods} />
                    <Route path="/add" component={Add} />
                    <Route path="/account" component={Account} />
                    <Route path="/mine" component={Mine} />
                    //Redirect 重定向匹配   render 自身组件，不需要重新写也不需要引入
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    //exact 精确匹配到/的时候才跳转
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="notfound" />
                </Switch>
            </div>
        );
    }
    state = {
        selectedTab: 'home',
        hidden: false,
        fullScreen: true,
        menu: [
            {
                name: 'Home',
                path: '/home',
                text: '推荐',
                icon: 'home'
            },
            {
                name: 'Find',
                path: '/find',
                text: '发现',
                icon: 'home'
            },
            {
                name: 'Add',
                path: '/add',
                text: '+',
                icon: 'home'
            },
            {
                name: 'Account',
                path: '/account',
                text: '账号',
                icon: 'home'
            },
            {
                name: 'Mine',
                path: '/mine',
                text: '我的',
                icon: 'home'
            },
        ],
    }
    goto = (path) => {
        let { history } = this.props;
        // this.setState({ selectedTab: path })
        history.push(path)
    }
    componentDidMount() {
        this.setState({
            selectedTab: this.props.location.pathname
        })
    }
    // shouldComponentUpdate(nextProps) {
    //     this.state.houtui = nextProps.location.pathname;
    //     // console.log(this.state.houtui);
    //     return true

    // }
    // componentDidUpdate(prevProps) {
    //     this.state.houtui = this.props.location.pathname;
    // }
    render() {
        //渲染页面，在里面再添加组件
        return (
            <div>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        {this.state.menu.map(item => {
                            return <TabBar.Item
                                title={item.text}
                                key={item.path}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
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
                                {this.renderContent(item.text)}
                            </TabBar.Item>
                        })}


                    </TabBar>
                </div>
                {/* <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/goods:id" component={Goods} />
                    <Route path="/list" component={List} />
                    <Route path="/login" component={Login} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/reg" component={Reg} />
                    //Redirect 重定向匹配   render 自身组件，不需要重新写也不需要引入
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    //exact 精确匹配到/的时候才跳转
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="notfound" />
                </Switch> */}
            </div>
        )
    }
}
App = withRouter(App);
export default App;