//引入模块
import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
//加载器识别APP文件
import App from "./App";
import store from "./store";
//渲染
render(
    <Provider store={store}>
        <HashRouter>
            {/* ({可以直接使用全局}) */}
            {/* {需要变成组件才能使用} */}
            <App />
        </HashRouter>
    </Provider>,
    //识别后渲染ID为APP的的标签里面
    document.getElementById("app")
);
