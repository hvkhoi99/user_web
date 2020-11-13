import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListCategories } from '../../actions/category';
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

    // searchClick = () => {
    //     let name = this.nameRef.current.value;
    //     (name === "") ? this.props.fetchStories() : this.props.searchStories(name)
    // }

    isChange = () => {
        let name = this.nameRef.current.value;
        if(name === ''){
            this.setState({suggestStatus: false});
        }
        else{
            this.setState({suggestStatus: true})
            this.props.searchStories(name)
        }
        // (name === "") ? this.props.fetchStories() : this.props.searchStories(name)
    }

    render() {
        // console.log(this.props.storiesSuggest);
        const listCategories = this.props.categories.map((item, index) => {
            return (<li key={index}><a href={`/category/${item.id}`}>{item.name}</a></li>)
        })
        return (
            <div className="mainPart">
                <header>
                    {/* Searching bar*/}
                    <div className="topNav">
                        <ul className="searchBar">
                            <li className="logo"><Link to="/">MangaWorld</Link></li>
                            <li className="search-input">
                                {/* <a> */}
                                    <input type="text" ref={this.nameRef} onChange={() => this.isChange()} id="searchBar" placeholder="tìm kiếm ở đây" />
                                   {(this.state.suggestStatus) ? <SuggestSearch storiesSuggest = {this.props.storiesSuggest}/> : <></>}  
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
                                    <li> <a href="/">Đăng nhập</a></li>
                                    <li> <a href="/">Đăng kí</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* navigation menu */}
                    <div className="navMenu-top">
                        <nav>
                            <ul>
                                <li><Link to="/"><i className="fas fa-home" /></Link></li>
                                <li><a href="/">HOT</a></li>
                                <li><a href="/">THEO DÕI</a></li>
                                <li><a href="/history">LỊCH SỬ</a></li>
                                <li><a href="/">THỂ LOẠI <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></a>
                                    <ul className="dropdown_1">
                                        {listCategories}
                                    </ul>
                                </li>
                                <li><a>XẾP HẠNG <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></a>
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

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)

