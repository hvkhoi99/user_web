import Axios from 'axios';
import React, { Component } from 'react';
import { showLoading } from '../../utils/helpers';
import './login.css';
import * as Config from '../../constants/Config';



class PageChangePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgPassCurrent: "",
            msgPass: "",
            msgPassConfirm: "",
            msgErr: "",
            msgSuccess: "",
            password_current: "",
            password: "",
            password_confirm: "",
        }
        this.password_currentRef = React.createRef()
        this.passwordRef = React.createRef()
        this.password_confirmRef = React.createRef()
    }


    saveClick = (e) => {
        showLoading(true);
        e.preventDefault();
        var { match } = this.props;
        var password_current = this.password_currentRef.current.value;
        var password = this.passwordRef.current.value;
        var password_confirm = this.password_confirmRef.current.value;
        var email = match.params.email;

        if (email !== null) {
            Axios.post(`${Config.API_URL}/api/change-password/` + email, {
                password_current,
                password,
                password_confirm
            }).then((response) => {
                showLoading(false);
                if (response.data.status === 200) {
                    this.setState({
                        msgPassCurrent: "",
                        msgPass: "",
                        msgPassConfirm: "",
                        msgErr: "",
                        msgSuccess: response.data.message,
                    });

                }
                else {
                    if (response.data.status === "failed") {
                        if (response.data.success === undefined) {
                            this.setState({
                                msgPassCurrent: response.data.errors.password_current,
                                msgPass: response.data.errors.password,
                                msgPassConfirm: response.data.errors.password_confirm,
                                msgErr: "",
                                msgSuccess: "",
                            });
                        }
                        else {
                            this.setState({
                                msgPassCurrent: "",
                                msgPass: "",
                                msgPassConfirm: "",
                                msgErr: response.data.message,
                                msgSuccess: "",
                            });
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
            // e.target.reset();
        }

    }

    render() {

        return (
            <div className="page-login-bg">
                <div className="form-login-container">
                    <div className="form-login">
                        <h3 className="logo-login">Đổi mật khẩu</h3>

                        <div className="form-group-login">
                            <label className="label_changePass">Mật khẩu hiện tại</label>
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }}
                                className='form-control-login'
                                placeholder="Mật khẩu hiện tại..."
                                type="password" ref={this.password_currentRef}
                                name="current-password" id="current-password"
                                defaultValue={this.state.password_current} />
                            <span className="text-danger">{this.state.msgPassCurrent}</span>
                        </div>

                        <div className="form-group-login">
                            <label className="label_changePass">Mật khẩu mới</label>

                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }}
                                className='form-control-login'
                                placeholder="Mật khẩu mới..."
                                type="password"
                                ref={this.passwordRef}
                                name="new-password"
                                id="new-password" />
                            <span className="text-danger">{this.state.msgPass}</span>
                        </div>

                        <div className="form-group-login">
                            <label className="label_changePass">Nhập lại mật khẩu mới</label>

                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    this.RegisterClick();
                                }
                            }}
                                className='form-control-login'
                                placeholder="Nhập lại mật khẩu mới..."
                                type="password"
                                ref={this.password_confirmRef}
                                name="re-new-password"
                                id="re-new-password"

                            />
                            <span className="text-danger">{this.state.msgPassConfirm}</span>
                        </div>

                        <div className="form-group-login">
                            <button className="form-submit-login" onClick={(e) => this.saveClick(e)} >Thực hiện</button>
                        </div>
                        <span className="text-danger">{this.state.msgErr}</span>
                        <span className="text-success">{this.state.msgSuccess}</span>
                    </div>
                </div>

            </div>


        )
    }
}

export default PageChangePass;