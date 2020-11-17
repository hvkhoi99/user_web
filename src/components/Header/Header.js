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
                    <li className="hi-name"><a href='/'>Hi <p>{name}</p></a></li>
                    <li className="dangxuat"> <a onClick={() => this.LogOutClick()} href="/" >Đăng xuất</a></li>
                </>

            ) : (
                <>
                    <li className="dangnhap"> <Link to="/login">Đăng nhập</Link></li>
                    <li className="dangky"> <a href="/">Đăng ký</a></li>
                </>
            );


        return (
            <div className="mainPart">
                <header>
                    <div className="topNav">
                        <ul className="searchBar">
                            {/* <li className="logo"><Link to="/"></Link></li> */}
                            <Link to="/" className="logo header__logo"><img src={logoImg} alt="logo" /></Link>
                            <li className="search-input">
                                <input type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="Tìm kiếm ..." />
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

