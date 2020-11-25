import Axios from 'axios';
import React, { Component } from 'react';
import showAlert from '../../reducers/showAlert';
import './login.css';



class PageRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            redirect: false,
            errUserName: '',
            errMsgEmail: "",
            errMsgPwd: "",
            errMsgRePwd: "",
            errMsg: "",
        };
        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
        this.RepasswordRef = React.createRef()
    }

    RegisterClick = () => {
        var name = this.nameRef.current.value;
        var email = this.emailRef.current.value;
        var password = this.passwordRef.current.value;
        var password_confirm = this.RepasswordRef.current.value;
        var { history } = this.props;

        Axios
            .post("http://localhost:8000/api/user/register", { name, email, password, password_confirm })
            .then((response) => {
                if (response.data.status === 200) {
                    this.setState({
                        msg: response.data.message,
                        errMsg: "",
                    });
                    setTimeout(() => {
                        if (window.confirm('Đã đăng ký thành công! Đến trang đăng nhập ?')) {
                            history.push('/login');
                        }
                    }, 2000);
                }
                else {
                    if (response.data.status === "failed") {
                        this.setState({ msg: response.data.message });
                        if (response.data.success === undefined) {
                            this.setState({
                                errUserName: response.data.errors.name,
                                errMsgEmail: response.data.errors.email,
                                errMsgPwd: response.data.errors.password,
                                errMsgRePwd: response.data.errors.password_confirm,
                                msg: "",
                            });
                        }
                        else {
                            this.setState({
                                errMsg: response.data.message,
                                errUserName: "",
                                errMsgEmail: "",
                                errMsgPwd: "",
                                errMsgRePwd: "",
                                msg: "",
                            });
                        }
                    }
                }
            });
    }
    render() {

        return (
            <div className="page-login-bg">
                <div className="form-login-container">
                    <div className="form-login">
                        <h3 className="logo-login">Đăng Ký</h3>

                        <div className="form-group-login">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }} className="form-control-login" type="text" name="name" placeholder="Name" ref={this.nameRef} />
                            <i className="fa fa-user icon-login" />
                            <span className="text-danger">{this.state.errUserName}</span>
                        </div>

                        <div className="form-group-login">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }} className="form-control-login" type="text" name="email" placeholder="Email" ref={this.emailRef} />
                            <i className="fa fa-envelope icon-login" />
                            <span className="text-danger">{this.state.errMsgEmail}</span>
                        </div>

                        <div className="form-group-login">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }} className="form-control-login" type="password" name="password" placeholder="Password" ref={this.passwordRef} />
                            <i className="fa fa-unlock-alt icon-login" />
                            <span className="text-danger">{this.state.errMsgPwd}</span>
                        </div>

                        <div className="form-group-login">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }} className="form-control-login" type="password" name="password_confirm" placeholder="Confirm Password" ref={this.RepasswordRef} />
                            <i className="fa fa-unlock-alt icon-login" />
                            <span className="text-danger">{this.state.errMsgRePwd}</span>
                        </div>

                        <div className="form-group-login">
                            <button className="form-submit-login" onClick={() => this.RegisterClick()} >Đăng Ký</button>
                        </div>
                        <p className="text-danger">{this.state.errMsg}</p>
                        <span className="text-success">{this.state.msg}</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default PageRegister;