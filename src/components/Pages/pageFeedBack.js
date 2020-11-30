import React, { Component } from 'react'
import emailjs from 'emailjs-com';

import './login.css';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg: "",
            msg: "",
        }
        this.subjectRef = React.createRef()
        this.messageRef = React.createRef()
    }

    sendEmail(e) {
        e.preventDefault();
        if (this.subjectRef.current.value !== "" && this.messageRef.current.value !== "") {
            emailjs.sendForm('service_l068fu5', 'template_2ogh7x8', e.target, 'user_awv3YdZqy00gAmT9XMCfc')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            this.setState({
                msg: "Đả gửi phản hồi thành công",
                errMsg: ""
            })
        }
        else{
            this.setState({
                errMsg: "Vui lòng điền đầy đủ thông tin",
                msg: ""
            })
        }

    }

    componentDidMount() {
        var { history } = this.props;
        var user = JSON.parse(localStorage.getItem('userLogin'));
        if (user === null) {
            if (window.confirm('Bạn cần phải đăng nhập')) {
                history.push('/login');
            }
            else {
                history.goBack();
            }
        }
    }

    render() {
        var user = JSON.parse(localStorage.getItem('userLogin'));
        var email = "", name = "";
        if (user !== null) {
            email = user.email;
            name = user.name
        }
        return (
            <div className="page-login-bg">
                <div className="form-login-container">
                    <div className="form-login">
                        <h3 className="logo-login">Phản Hồi</h3>
                        <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
                            <div className="form-group-login">
                                <input onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.sendEmail(e);
                                    }
                                }} className="form-control-login" type="text" name="name" placeholder="Name" defaultValue={name} readOnly />
                            </div>

                            <div className="form-group-login">
                                <input onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.sendEmail(e);
                                    }
                                }} className="form-control-login" type="email" name="email" placeholder="Email" defaultValue={email} readOnly />
                            </div>

                            <div className="form-group-login">
                                <input onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        this.sendEmail(e);
                                    }
                                }} className="form-control-login" type="text" name="subject" placeholder="Subject" ref={this.subjectRef} />
                            </div>

                            <div className="form-group-login">
                                <textarea ref={this.messageRef} name="message" style={{ width: '100%', padding: '10px', borderColor: "#dbdbdb", boxShadow: "inset 0 1px 2px rgba(10,10,10,.1)" }} placeholder="Message"></textarea>
                            </div>

                            <div className="form-group-login">
                                <button className="form-submit-login" type="submit">Gửi phản hồi</button>
                            </div>
                        </form>

                        <p className="text-danger">{this.state.errMsg}</p>
                        <span className="text-success">{this.state.msg}</span>

                    </div>
                </div>
            </div>
        )
    }
}
