import React, { Component } from "react";
import '../Css/Find.css'
class dynamic extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='dynamic-find'>
                <div className="dynamic-main">
                    <div className="dynamic-main-left">{this.props.title}</div>
                    <div className="dynamic-main-right">{this.props.name}</div>
                </div>
            </div>
        );
    }
}

export default dynamic;
