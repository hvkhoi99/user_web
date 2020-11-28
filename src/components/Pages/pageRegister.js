import Axios from 'axios';
import React, { Component } from 'react';
import showAlert from '../../reducers/showAlert';
import './login.css';
import { md5 } from './md5';



class PageRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            redirect: false,
            errUserName: '',
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        };
        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    RegisterClick = () => {
        var name = this.nameRef.current.value;
        var email = this.emailRef.current.value;
        var password = md5(this.passwordRef.current.value);
        var { history } = this.props;
        if (name && email && password) {
            Axios.post("http://localhost:8000/api/user/register", { name, email, password }).then(response => {
                history.goBack();
                showAlert('Đăng ký thành công', 'success');
            }).catch(err => {
                console.log(err.response);
            });
        } else {

            if (name === '') {
                this.setState({
                    errUserName: 'Bạn chưa nhập tên',
                })
            } else if (email === '') {
                this.setState({
                    errMsgEmail: 'Bạn chưa nhập email',
                })
            } else if (password === '') {
                this.setState({
                    errMsgPwd: 'Bạn chưa nhập mật khẩu',
                })
            } else {
                this.setState({
                    errMsg: "",
                    errUserName: "",
                    errMsgEmail: "",
                    errMsgPwd: "",
                    msg: ""
                });
            }


        }
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
                            <i className="fa fa-user icon-login" />
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