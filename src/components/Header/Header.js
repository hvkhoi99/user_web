import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListCategories } from '../../actions/category';


class Header extends Component {

    componentDidMount() {
        this.props.getCategories();
    }


    render() {

        const listCategories = this.props.categories.map((item, index) => {
            return (<li key={index}><a href={`/category/${item.id}`}>{item.name}</a></li>)
        })
        return (
            <div className="mainPart">
                <header>
                    {/* Searching bar*/}
                    <div className="topNav">
                        <ul className="searchBar">
                            <li className="logo"><a href>MangaWorld</a></li>
                            <li>
                                <a>
                                    <input type="search" id="searchBar" placeholder="tìm kiếm ở đây" />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                </a>
                            </li>
                            <li>
                                <a href>
                                    <i className="fas fa-comment" style={{ fontSize: '40px' }} />
                                </a>
                            </li>
                            <li>
                                <ul>
                                    <li> <a href>Đăng nhập</a></li>
                                    <li> <a href>Đăng kí</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* navigation menu */}
                    <div className="navMenu">
                        <nav>
                            <ul>
                                <li><a href><i className="fas fa-home" /></a></li>
                                <li><a href>HOT</a></li>
                                <li><a href>THEO DÕI</a></li>
                                <li><a href>LỊCH SỬ</a></li>
                                <li><a href>THỂ LOẠI <i className="fas fa-expand-arrows-alt" style={{ marginLeft: '4px' }} /></a>
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
                                <li><a>TÌM TRUYỆN</a></li>
                                <li><a>CON GÁI</a></li>
                                <li><a>CON TRAI</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => {
            dispatch(getListCategories());
        },
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

