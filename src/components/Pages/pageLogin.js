import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLoginTrue } from '../../actions/login';
import { showLoading } from '../../utils/helpers';
import './login.css';
import * as Config from '../../constants/Config';
import Sticky from '../Header/Sticky';
import Footer from '../Footer/Footer';


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
        showLoading(true)
        var { history } = this.props;
        Axios
            .post(`${Config.API_URL}/api/login-user`, {
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
            }).then((response) => {
                setTimeout(() => {
                    showLoading(false)
                    if (response.data.status === 200) {
                        localStorage.setItem("isLogin", true);
                        localStorage.setItem("userLogin", JSON.stringify(response.data.data));
                        this.props.setLoginTrue();
                        history.push('/');
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
                }, 2000);

            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="pageChung">
                <Sticky />
                <div className="page-login-bg">
                    <div className="form-login-container">
                        <div className="form-login">
                            <h3 className="logo-login">LOGIN</h3>
                            <div className="form-group-login">
                                <input onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.loginClick();
                                    }
                                }} className="form-control-login" type="text" name="email" placeholder="Email" ref={this.emailRef} />
                                <i className="fa fa-user icon-login" />
                                <span className="text-danger">{this.state.errMsgEmail}</span>
                            </div>
                            <div className="form-group-login">
                                <input onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.loginClick();
                                    }
                                }} className="form-control-login" type="password" name="password" placeholder="Password" ref={this.passwordRef} />
                                <i className="fa fa-unlock-alt icon-login" />
                                <span className="text-danger">{this.state.errMsgPwd}</span>
                            </div>
                            <div className="checkbox-login">
                                <div className="form-check-login">
                                    <input className="remember-me-login" type="checkbox" name="remember_me" id="remember_me" />
                                    <label htmlFor="remember_me" className="label-login">Ghi nhớ đăng nhập</label>
                                </div>
                                <div className='link-dangky'>
                                    <Link to='/' ><p className='link-dangky-p'>Quên mật khẩu?</p></Link>
                                </div>
                                {/* <div className='link-dangky'>
                                    <Link to='/register' ><p className='link-dangky-p'>Đăng ký</p></Link>
                                </div> */}
                            </div>

                            <div className="form-group-login">
                                <button className="form-submit-login login" onClick={() => this.loginClick()}>Đăng nhập</button>
                            </div>
                            <div className="form-group-login">
                                <button className="form-submit-login facebook" onClick={() => this.loginClick()}><i className="fab fa-facebook-f"></i>Đăng nhập bằng Facebook</button>
                            </div>
                            <div className="form-group-login">
                                <button className="form-submit-login gmail" onClick={() => this.loginClick()}><i className="fab fa-google-plus-g"></i>Đăng nhập bằng Google</button>
                            </div>
                            <p className="text-danger">{this.state.errMsg}</p>
                            <span className="text-success">{this.state.msg}</span>
                        </div>
                    </div>
                </div>
                <Footer />
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
