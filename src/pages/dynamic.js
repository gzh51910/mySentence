import React, { Component } from "react";
import {Link } from "react-router-dom";
import "../Css/find.css";
import { my } from "../Api";
class dynamic extends Component {
    state = {
        name: "newest",
        data: []
    };
    componentDidMount() {
        this.getdata(this.state.name);
    }
    // goto = id => {
    //     // history.push(`/goods/${id}`)
    //     // this.props.history.push(`/goods/${id}`)
    //     console.log(this);
    //     console.log(this.history);
    // };

    async getdata(name) {
        let {
            data: { data }
        } = await my.get("/goods/name", {
            name: 20,
            condition: "classrandom",
            classcondition: name
        });
        this.setState({
            data: data
        });
    }

    componentDidUpdate() {
        if (this.state.name != this.props.name) {
            this.setState({
                name: this.props.name
            });
            this.getdata(this.props.name);
        }
    }

    render() {
        if (this.state.data.length != 0) {
            return (
                <div className="dynamic-find">
                    {this.state.data.map(item => {
                   
                        
                        return (
                            <Link
                                style={{ display: 'block'}}
                                key={item._id}
                                to={{
                                    pathname: `/goods/${item._id}`,
                                    state:{id:item._id}
                                }}
                            >
                                <div
                                    className="dynamic-main"
                                    data-id={item._id}
                                    key={item._id}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </Link>
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
