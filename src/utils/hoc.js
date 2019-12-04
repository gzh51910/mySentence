import React, { Component } from 'react';
import { my } from '../Api';
export function withToken(InnerComponent) {
    return class OuterComponent extends Component {
        state = {
            Authorization: '',
            async add(data) {
                await my.patch("goods/upda", {
                    id: data._id,
                    value: data.reputation
                })
            }
        }

        componentDidMount() {
            let Authorization = localStorage.getItem('hanhong');
            this.setState({
                Authorization
            })
        }
        render() {
            return <InnerComponent {...this.props} {...this.state} />
        }
    }

}