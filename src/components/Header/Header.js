import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLoginFalse } from '../../actions/login';
import { actSearchStoriesRequest, getListStories } from '../../actions/story';
import { actGetUserRequest } from '../../actions/user';
import logoImg from '../../webLogo.png';
import SuggestSearch from './SuggestSearch';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestStatus: false
        }
        this.nameRef = React.createRef();
    }

    componentDidMount() {
        var userLogin = localStorage.getItem('userLogin');
        var userCurrent = (userLogin) ? JSON.parse(userLogin) : [];
        const user_id = userCurrent.id;
        this.props.getUser(user_id);
    }
    

    isChange = () => {
        let name = this.nameRef.current.value;
        if (name === '') {
            this.setState({ suggestStatus: false });
        }
        else {
            this.setState({ suggestStatus: true })
            this.props.searchStories(name)
        }
    }

    LogOutClick = () => {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('isLogin');
    }

    checkLoginPage = () => {
        if (this.props.checkLogin === null) {
            if (window.confirm("Chức năng này hoạt động khi đã đăng nhập!")) {
            }
        } else {
            return;
        }
    }

    render() {

        var name = (this.props.checkLogin) ? this.props.userCurrent.name : 'Bạn';

        const htmlLogin = (this.props.checkLogin) ?
            (
                <>
                    <li className="hi-name">
                        <a className="hi-name-a" href='/user'>Hi <p>{name}</p></a>
                        <ul className="dropdown_1">
                            <li><Link to="/user" className="dropdown_1-a">Thông tin cá nhân</Link></li>
                            <li><Link to={`/change-password/${this.props.userCurrent.email}`} className="dropdown_1-a">Đổi mật khẩu</Link></li>
                        </ul>
                    </li>
                    <li className="dangxuat"> <a onClick={() => this.LogOutClick()} href="/" >Đăng xuất</a></li>
                </>

            ) : (
                <>
                    <li className="dangnhap"> <Link to="/login">Đăng nhập</Link></li>
                    <li className="dangky"> <Link to="/register">Đăng ký</Link></li>
                </>
            );

        return (
            <div className="mainPart">
                <header>
                    <div className="topNav">
                        <ul className="searchBar">
                            <Link to="/" className="header__logo"><img src={logoImg} alt="logo" /></Link>
                            <li className="search-input">
                                <input className="input-search" type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="Tìm kiếm ..." />
                                <i className="fa fa-search" aria-hidden="true" style={{ position: 'relative', bottom: 30, left: 165, color: 'gray', fontSize: 18, cursor: 'pointer' }}></i>
                                {(this.state.suggestStatus) ? <SuggestSearch storiesSuggest={this.props.storiesSuggest} /> : <></>}
                            </li>
                            <li className='phanhoi-icon'>
                                <Link className="feedback-area" to="/phan-hoi"><i className="fas fa-comment" style={{ fontSize: '40px' }} /></Link>
                            </li>
                            <li>
                                <ul>
                                    {htmlLogin}
                                </ul>
                            </li>
                        </ul>
                    </div>

                </header>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        stories: state.stories,
        storiesSuggest: state.storiesSuggest,
        checkLogin: state.checkLogin,
        userCurrent: state.userCurrent

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        fetchStories: () => {
            dispatch(getListStories())
        },
        searchStories: (stories) => {
            dispatch(actSearchStoriesRequest(stories))
        },
        setLoginFalse: () => {
            dispatch(isLoginFalse())
        },
        getUser: (id) => {
            dispatch(actGetUserRequest(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

