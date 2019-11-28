import React, { Component } from "react";
import { withToken } from "../utils/hoc";
@withToken
class Home extends Component {
    constructor() {
        super();
        this.state = {
            hanhong: ""
        };
    }
    render() {
        // console.log(this.props.bb());
        return (
            <div>推荐</div>
        )
    }
}
export default Home;
