import React, { Component } from 'react';
export function withToken(InnerComponent) {
    return class OuterComponent extends Component {
        state = {
            Authorization: '',
            data: '1',
            bb(x) {
                console.log(x);

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