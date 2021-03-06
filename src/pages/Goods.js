import React, { Component } from "react";
import { my } from '../Api';
import "../Css/goods.min.css";
import { Modal, Button, Toast } from "antd-mobile";
import { withToken } from "../utils/hoc";
@withToken
class Goods extends Component {
    state = {
        data: "",
        modal: false,
        modal1: false,
    }
    async componentDidMount() {
        let pd = this.props.location.pathname;
        if (pd == "/goods/notfound") {
            let { data: { data } } = await my.get("goods/name", {
                name: 1,
                condition: "random"
            })
            this.setState({
                data: data[0]
            });
        } else {
            let { data: { data } } = await my.get(`goods/${this.props.match.params.id}`)
            this.setState({
                data: data[0]
            });
        }
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onWrapTouchStart = (e) => {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    go() {
        if (this.props.location.pathname == "/goods/notfound") {
            this.props.history.push('/')
        } else {
            this.props.history.go(-1)
        }
        // let data = await my.get("/goods/sss", {
        //     query: "人生"
        // });
        // console.log(data);
    }
    render() {
        return (
            <div className="goods">
                <div className="top subside">
                    <i className="iconfont icon-houtui" onClick={() => this.go()}></i>
                    <h3>句子详情</h3>
                    <i className="iconfont icon-more" onClick={this.showModal('modal1')}></i>
                    <i className="iconfont icon-f14" onClick={() => location.reload([false])}></i>
                </div>
                <div className="mid">
                    <div className="con">
                        <div className="img">
                            <img src={this.state.data.cover} />
                            <div>
                                <p onClick={this.showModal('modal')}>{this.state.data.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mes">
                        <i className="iconfont icon-shoucang4" onClick={() => this.props.add(this.state.data)}><span id="add" onClick={() => document.getElementById("add").innerText++}>{this.state.data.reputation}</span></i>
                        <i className="iconfont icon-shoucang"></i>
                        <i className="iconfont icon-zhuanfa"></i>
                        <span>由<span>我练功发自真心</span>投稿</span>
                    </div>
                    <div className="kong"></div>
                    <div className="sx">
                        <div className="an"><span>猜你喜欢：</span>
                            <Button type="primary" size="small" onClick={() => this.props.history.push('/goods/')
                            }>点这里</Button>
                        </div>
                        <div className="xx"><span>出处：</span>
                            <div className="tp">
                                <i className="iconfont icon-zixunkongbaitouxiang"></i>
                                <span>暂无</span>
                                <i className="iconfont icon-zixunkongbaitouxiang"></i>
                                <span>暂无</span>
                            </div>
                        </div>
                    </div>
                    <div className="kong"></div>
                    <div className="discuss">
                        <div className="_top">
                            <span className="left">评论</span>
                            <span className="right">
                                <i className="iconfont icon-zhuanfa"></i>按时间
                            </span>
                        </div>
                        <ul className="cont">
                            <li>
                                <img src="../img/3.png" />
                                <div className="left">
                                    <p>小小韩红</p>
                                    <div><span>12</span><i className="iconfont icon-zanpress"></i></div>
                                    <p>3小时前</p>
                                    <h5>喜欢里呀</h5>
                                </div>
                            </li>
                            <li>
                                <img src="../img/3.png" />
                                <div className="left">
                                    <p>小小韩红</p>
                                    <div><span>12</span><i className="iconfont icon-zanpress"></i></div>
                                    <p>3小时前</p>
                                    <h5>喜欢里呀</h5>
                                </div>
                            </li>
                            <li>
                                <img src="../img/3.png" />
                                <div className="left">
                                    <p>小小韩红</p>
                                    <div><span>12</span><i className="iconfont icon-zanpress"></i></div>
                                    <p>3小时前</p>
                                    <h5>喜欢里呀</h5>
                                </div>
                            </li>
                            <li>
                                <img src="../img/3.png" />
                                <div className="left">
                                    <p>小小韩红</p>
                                    <div><span>12</span><i className="iconfont icon-zanpress"></i></div>
                                    <p>3小时前</p>
                                    <h5>喜欢里呀</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="down">
                        <input type="text" placeholder="请输入评论" />
                        <span>发送</span>
                    </div>
                </div>
                <Modal
                    visible={this.state.modal}
                    transparent
                    maskClosable={true}
                    onClose={this.onClose('modal')}
                >
                    <div style={{ height: 150, overflow: 'scroll' }}>
                        {this.state.data.content}
                    </div>
                </Modal>
                <Modal
                    popup
                    visible={this.state.modal1}
                    onClose={this.onClose('modal1')}
                    animationType="slide-up"
                >
                    <div className="xx" onClick={() => Toast.info('就你还想举报我，食屎拉累', 2)}>举报</div>
                    <div className="gg"></div>
                    <div className="qx" onClick={() => this.onClose('modal1')()}>取消</div>
                </Modal>
            </div >
        )
    }
}
export default Goods;
