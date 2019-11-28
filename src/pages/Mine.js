import React, { Component } from 'react';
import { withToken } from '../utils/hoc';
@withToken
class Mine extends Component {
    constructor() {
        super()
        this.state = {
            hanhong: ''
        }
    }
    render() {
        // console.log("13", this.props);
        // console.log(this.bb);

        return (
            <div>我的({this.state.hanhong})</div>
        )
    }
}
// Mine = withToken(Mine);
export default Mine;