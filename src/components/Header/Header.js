import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLoginFalse } from '../../actions/login';
import { actSearchStoriesRequest, getListStories } from '../../actions/story';
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

        var name = (this.props.checkLogin) ? JSON.parse(localStorage.getItem('userLogin')).name : 'Bạn';

        const htmlLogin = (this.props.checkLogin) ?
            (
                <>
                    <li className="hi-name">
                        <a className="hi-name-a" href='/user'>Hi <p>{name}</p></a>
                        <ul className="dropdown_1">
                            <li><Link to="/user" className="dropdown_1-a">Thông tin cá nhân</Link></li>
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
                                <input type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="Tìm kiếm ..." />
                                <i class="fa fa-search"  aria-hidden="true" style={{position: 'relative', bottom: 30, left: 155, color: 'gray', fontSize: 18}}></i>
                                {(this.state.suggestStatus) ? <SuggestSearch storiesSuggest={this.props.storiesSuggest} /> : <></>}
                            </li>
                            <li className='phanhoi-icon'>
                                <i className="fas fa-comment" style={{ fontSize: '40px' }} />
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
        checkLogin: state.checkLogin

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

