import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListCategories } from '../../actions/category';

class Sticky extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navbar: false
        }
    }

    componentDidMount() {
        this.props.getCategories();
        window.addEventListener('scroll', this.changeBackground());
    }

    changeBackground = () => {
        if (window.scrollY >= 80) {
            this.setState({ navbar: true });
        }
        else this.setState({ navbar: false });
    }

    render() {
        const { checkLG } = this.props;
        const listCategories = this.props.categories.map((item, index) => {
            return (<li key={index}><a href={`/category/${item.id}`}>{item.name}</a></li>)
        })
        return (
            <div className='navbar'>
                <nav className="navMenu-top">
                    <ul>
                        <li className="nav-li"><Link to="/"><i className="fas fa-home" /></Link></li>
                        <li className="nav-li"><Link to="/">HOT</Link></li>
                        <li className="nav-li"><Link onClick={checkLG} to="/follow">THEO DÕI</Link></li>
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
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => {
            dispatch(getListCategories());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sticky)