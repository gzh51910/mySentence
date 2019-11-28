import React, { Component } from 'react';
export function withToken(InnerComponent) {
    return class OuterComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Authorization: '',
                bb() {
                    console.log(123);
                }
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