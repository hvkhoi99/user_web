import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListCategories } from '../../actions/category';
import { isLoginFalse } from '../../actions/login';
import { actFetchStoriesRequest, actSearchStoriesRequest, getListStories } from '../../actions/story';
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
        this.props.getCategories();
    }

    logoutClick = () => {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('isUserLoggedIn');

        this.props.setLoginFalse();
    }

    // searchClick = () => {
    //     let name = this.nameRef.current.value;
    //     (name === "") ? this.props.fetchStories() : this.props.searchStories(name)
    // }

    isChange = () => {
        let name = this.nameRef.current.value;
        if (name === '') {
            this.setState({ suggestStatus: false });
        }
        else {
            this.setState({ suggestStatus: true })
            this.props.searchStories(name)
        }
        // (name === "") ? this.props.fetchStories() : this.props.searchStories(name)
    }

    render() {
        var user = (this.props.checkLogin) ? JSON.parse(localStorage.getItem('userLogin')) : 'Bạn';
        const htmlLogin = (this.props.checkLogin) ?
            (
                <>
                    <li> <a href="/" >Hi {user.name}</a></li>
                    <li> <Link to="/">Đăng xuất</Link></li>
                </>
            ) : (
                <>
                    <li> <Link to="/login" onClick = {() => this.logoutClick()}>Đăng nhập</Link></li>
                    <li> <Link to="/">Đăng ký</Link></li>
                </>
            );
        const listCategories = this.props.categories.map((item, index) => {
            return (<li key={index}><a href={`/category/${item.id}`}>{item.name}</a></li>)
        })
        return (
            <div className="mainPart">
                <header>
                    {/* <nav>
                        <a href="#home"><img className="logo" src="./resources/img/logo.png" alt="logo" /></a>
                        <ul class="main-nav">
                            <li><a href="#testimonials">How Clients Think</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div> */}

                    {/* Searching bar*/}
                    <div className="topNav">
                        <ul className="searchBar">
                            <li className="logo"><Link to="/">MangaWorld</Link></li>
                            <li className="search-input">
                                {/* <a> */}
                                <input type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="Tìm kiếm ..." />
                                {(this.state.suggestStatus) ? <SuggestSearch storiesSuggest={this.props.storiesSuggest} /> : <></>}
                                {/* <button type="submit" onClick={() => this.searchClick()} value="Tìm kiếm"><i className="fa fa-search" /></button> */}
                                {/* </a> */}
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-comment" style={{ fontSize: '40px' }} />
                                </a>
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
                                <li className="nav-li"><Link to="/" >THEO DÕI</Link></li>
                                <li className="nav-li"><Link to="/history">LỊCH SỬ</Link></li>
                                <li className="nav-li"><Link to="/">THỂ LOẠI <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></Link>
                                    <ul className="dropdown_1">
                                        {listCategories}
                                    </ul>
                                </li>
                                <li className="nav-li"><a>XẾP HẠNG <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></a>
                                    <ul className="dropdown_1">
                                        <li><a>Top all</a></li>
                                        <li><a>Top tháng</a></li>
                                        <li><a>Top tuần</a></li>
                                        <li><a>Top ngày</a></li>
                                        <li><a>Yêu thích</a></li>
                                        <li><a>Mới cập nhật</a></li>
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

