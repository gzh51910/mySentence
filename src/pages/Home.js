import React, { Component } from 'react';
import { withToken } from '../utils/hoc';
import { nsg } from '@/api';
@withToken
class Home extends Component {
    async componentDidMount() {
        let { datas } = await nsg.get({
            act: 'index'
        })
        console.log(datas);

    }
    constructor() {
        super()
        this.state = {
            hanhong: ''
        }
    }
    render() {
        // console.log(this.props.bb());
        return (
            <div>俺感觉好好哦</div>
        )
    }
}
export default Home;