import React, { Component } from "react";
class Goods extends Component {
    componentDidMount() {
        console.log(this.props);
        
        // 获取动态路由id
        // console.log(querystring.parse(this.props.location.search.slice(1)));
        // let { id } = this.props.match.params;

        // this.getData(id);
    }
    render() {
        return <div>商品详情1</div>;
    }
}
export default Goods;
