import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListCategories } from '../../actions/category';
import { isLoginFalse } from '../../actions/login';
import { actSearchStoriesRequest, getListStories } from '../../actions/story';
import SuggestSearch from './SuggestSearch';
import logoImg from '../../webLogo.png'


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestStatus: false
        }
        this.nameRef = React.createRef();
    }

    componentDidMount() {
        this.props.getCategories();
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

        const listCategories = this.props.categories.map((item, index) => {
            return (<li key={index}><a href={`/category/${item.id}`}>{item.name}</a></li>)
        })
        return (
            <div className="mainPart">
                <header>
                    
                    <div className="topNav">
                        <ul className="searchBar">
                            {/* <li className="logo"><Link to="/"></Link></li> */}
                            <Link to="/" className="logo header__logo"><img src={logoImg}  alt="logo" /></Link>
                            <li className="search-input">
                                <input type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="Tìm kiếm ..." />
                                {(this.state.suggestStatus) ? <SuggestSearch storiesSuggest={this.props.storiesSuggest} /> : <></>}
                            </li>
                            <li>
                                <i className="fas fa-comment" style={{ fontSize: '40px' }} />
                            </li>
                            <li>
                                <ul>
                                    {htmlLogin}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* navigation menu */}
                    <div className="navMenu-top">
                        <nav>
                            <ul>
                                <li className="nav-li"><Link to="/"><i className="fas fa-home" /></Link></li>
                                <li className="nav-li"><Link to="/">HOT</Link></li>
                                <li className="nav-li"><Link onClick={() => this.checkLoginPage()} to="/follow">THEO DÕI</Link></li>
                                <li className="nav-li"><Link to="/history">LỊCH SỬ</Link></li>
                                <li className="nav-li"><Link to="/">THỂ LOẠI <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></Link>
                                    <ul className="dropdown_1">
                                        {listCategories}
                                    </ul>
                                </li>
                                <li className="nav-li"><a href="/">XẾP HẠNG <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></a>
                                    <ul className="dropdown_1">
                                        <li><a href="/">Top all</a></li>
                                        <li><a href="/">Top tháng</a></li>
                                        <li><a href="/">Top tuần</a></li>
                                        <li><a href="/">Top ngày</a></li>
                                        <li><a href="/">Yêu thích</a></li>
                                        <li><a href="/">Mới cập nhật</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        stories: state.stories,
        storiesSuggest: state.storiesSuggest,
        checkLogin: state.checkLogin

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => {
            dispatch(getListCategories());
        },
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

