import React, { Component } from "react";
import "../Css/find.css";
import { my } from "../Api";
class dynamic extends Component {
    state = {
        data: []
    };
    async componentDidMount() {
        let {
            data: { data }
        } = await my.get("/goods/name", {
            name: 20,
            condition: "classrandom",
            classcondition: this.props.name
        });
        this.setState({
            data: data
        });
        console.log(this.state);
        
    }

    getdata = (name) => {
        console.log(name);
        console.log(1);
        
    }

    render() {
        { this.getdata.bind(this, this.props.title)}
        if (this.state.data.length != 0) {
            return (
                <div className="dynamic-find">
                    {this.state.data.map(item => {
                        return (
                            <div className="dynamic-main" data-id={item._id} key={item._id}>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                    {/* <div className="dynamic-main-left">
                            {this.props.title}
                        </div>
                        <div className="dynamic-main-right">
                            {this.props.name}
                        </div> */}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default dynamic;
