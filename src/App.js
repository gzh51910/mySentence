import React, { Component } from 'react';
//引入路由
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import { my } from './Api';
//引入组件
import Home from '~/Home';
import discovery from '~/discovery';
import Goods from '~/Goods';
import List from '~/List';
import Login from '~/Login';
import Mine from '~/Mine';
import Reg from '~/Reg';
import './App.scss'
//引入样式
class App extends Component {
    state = {
        currentPath: '/home',
        menu: [
            {
                name: 'Home',
                path: '/home',
                text: '首页',
                icon: 'home'
            },
            {
                name: 'discovery',
                path: '/discovery',
                text: '发现',
                icon: 'discovery'
            },
            {
                name: 'List',
                path: '/list',
                text: '列表页',
                icon: 'home'
            },
            {
                name: 'Login',
                path: '/login',
                text: '登录',
                icon: 'home'
            },
            {
                name: 'Mine',
                path: '/mine',
                text: '我的',
                icon: 'home'
            },
            {
                name: 'Reg',
                path: '/reg',
                text: '注册',
                icon: 'home'
            },
        ],
    }
    goto = ({ key: path }) => {
        let { history } = this.props;
        this.setState({ currentPath: path })
        history.push(path)
    }
    componentDidMount() {
        this.setState({
            currentPath: this.props.location.pathname
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
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discovery" component={discovery} />
                    <Route path="/goods:id" component={Goods} />
                    <Route path="/list" component={List} />
                    <Route path="/login" component={Login} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="notfound" />
                </Switch>
            </div>
        )
    }
}
App = withRouter(App);
export default App;