import { InputItem, List, Toast, Button } from "antd-mobile";
import React from "react";
import { my } from "../Api";
let style = {
    margin: {
        paddingTop: "20px",
        marginLeft: "10px",
        marginRight: "10px"
    },
    div: {
        width: "100%",
        height: "100%",
        // backgroundImage: `url(${imga})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    span: {
        textAlign: "center",
        paddingTop: "75px"
    }
};
class ErrorInputExample extends React.Component {
    state = {
        value: "",
        hasError: false,
        password: "",
        pasError: false,
        rev: ""
    };
    //   手机号验证
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info("请输入正确的手机号");
        }
    };
    onChange = (value, state) => {
        let val = value.replace(/\s/g, "");
        if (!/^1[3-9][0-9]{9}$/.test(val))
            this.setState({
                hasError: true
            });
        else {
            this.setState({
                hasError: false
            });
        }
        this.setState({
            value
        });
    };
    // 密码验证
    pasErrorClick = () => {
        if (this.state.pasError) {
            Toast.info("密码不符合规范");
        }
    };
    pasChange = value => {
        if (!/^[a-z][\d0-9]{4,9}$/i.test(value)) {
            this.setState({
                pasError: true
            });
        } else {
            this.setState({
                pasError: false
            });
        }
        this.setState({
            password: value
        });
    };

    //   验证两次密码是否相同
    revErrorClick = () => {
        Toast.info("两次输入密码不一致");
    };
    revChange = value => {
        this.setState({
            rev: value
        });
    };

    // 提交请求
    submit = () => {
        let { hasError, pasError, value, rev } = this.state;
        console.log(hasError, "===", this.state);
        if (hasError) {
            alert("请输入正确的手机号");
        } else if (pasError) {
            alert("密码格式不正确");
        } else if (this.state.password != rev) {
          alert("不一致");
        } else {
          async () => {
            let data = await my.post('/reg', {
              phone: value,
              password: this.state.password
            })
            console.log(data);
            
          };
          // console.log(data);
          
        }
    };
    render() {
        return (
            <div style={style.div}>
                <div style={style.span}>
                    <h4>免费注册</h4>
                </div>
                <List style={style.margin}>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >
                        手机号码
                    </InputItem>
                </List>
                {/* 请输入密码 */}
                <List style={style.margin}>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        error={this.state.pasError}
                        onErrorClick={this.pasErrorClick}
                        onChange={this.pasChange}
                        value={this.state.password}
                    >
                        密码
                    </InputItem>
                </List>
                {/* 再次验证 */}
                <List style={style.margin}>
                    <InputItem
                        type="password"
                        placeholder="再次输入密码"
                        error={this.state.password != this.state.rev}
                        onErrorClick={this.revErrorClick}
                        onChange={this.revChange}
                        value={this.state.rev}
                    >
                        再次输入密码
                    </InputItem>
                </List>
                <div style={style.margin}>
                    <Button
                        type="primary"
                        style={{
                            marginRight: "10px",
                            background: "#4076FF",
                            color: "#fff",
                            marginLeft: "10px"
                        }}
                        onClick={this.submit}
                    >
                        免费注册
                    </Button>
                </div>
            </div>
        );
    }
}

export default ErrorInputExample;
