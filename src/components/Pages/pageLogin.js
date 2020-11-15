import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isLoginTrue } from '../../actions/login'
import './login.css'

class PageLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        };
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    loginClick = () => {
        var {history} = this.props;
        Axios
            .post("http://localhost:8000/api/login-user", {
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
            }).then((response) => {
                console.log(response);
                if (response.data.status === 200) {
                    localStorage.setItem("isUserLoggedIn", true);
                    localStorage.setItem("userLogin", JSON.stringify(response.data.data));
                    // this.setState({
                    //     redirect: true,
                    // });
                    // showAlert('Đã đăng nhập thành công', 'success');
                    this.props.setLoginTrue();
                    history.goBack();
                    
                }
                else {
                    if (response.data.status === "failed") {
                        if (response.data.success === undefined) {
                            this.setState({
                                errMsgEmail: response.data.validation_error.email,
                                errMsgPwd: response.data.validation_error.password,
                                msg: "",
                                errMsg: "",

                            });
                        }
                        else {
                            this.setState({
                                errMsg: response.data.message,
                                errMsgEmail: "",
                                errMsgPwd: "",
                                msg: ""
                            });
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="form-login">
                    <h3 className="logo-login">ADMIN LOGIN</h3>
                    <div className="form-group-login">
                        <input className="form-control-login" type="text" name="email" placeholder="Email" ref={this.emailRef} />
                        <i className="fa fa-user icon-login" />
                        <span className="text-danger">{this.state.errMsgEmail}</span>
                    </div>
                    <div className="form-group-login">
                        <input className="form-control-login" type="password" name="password" placeholder="Password" ref={this.passwordRef} />
                        <i className="fa fa-unlock-alt icon-login" />
                        <span className="text-danger">{this.state.errMsgPwd}</span>
                    </div>
                    <div className="checkbox-login">
                        <div className="form-check-login">
                            <input className="remember-me-login" type="checkbox" name="remember_me" id="remember_me" />
                            <label htmlFor="remember_me" className="label-login">Ghi nhớ đăng nhập</label>
                        </div>
                    </div>
                    <div className="form-group-login">
                        <button className="form-submit-login" onClick={() => this.loginClick()} >Login</button>
                    </div>
                    <p className="text-danger">{this.state.errMsg}</p>
                    <span className="text-success">{this.state.msg}</span>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        checkLogin: state.checkLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginTrue: () => {
            dispatch(isLoginTrue())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin)
