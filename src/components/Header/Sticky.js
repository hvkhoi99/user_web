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
                        <li className="nav-li"><Link to="/hot">HOT</Link></li>
                        <li className="nav-li"><Link onClick={checkLG} to="/follow">THEO DÕI</Link></li>
                        <li className="nav-li"><Link to="/">DAILY <i className="fas fa-sort" style={{ marginLeft: '4px' }} /></Link>
                            <ul className="dropdown_1">
                                <li><Link to="/daily/monday">Monday</Link></li>
                                <li><Link to="/daily/tuesday">Tuesday</Link></li>
                                <li><Link to="/daily/wednesday">Wednesday</Link></li>
                                <li><Link to="/daily/thursday">Thursday</Link></li>
                                <li><Link to="/daily/friday">Friday</Link></li>
                                <li><Link to="/daily/saturday">Saturday</Link></li>
                                <li><Link to="/daily/sunday">Sunday</Link></li>
                            </ul>
                        </li>
                        <li className="nav-li"><Link to="/history">LỊCH SỬ</Link></li>
                        <li className="nav-li"><Link to="/">THỂ LOẠI <i className="fas fa-sort" style={{ marginLeft: '4px' }} /></Link>
                            <ul className="dropdown_1">
                                {listCategories}
                            </ul>
                        </li>
                        <li className="nav-li"><Link to="/">XẾP HẠNG <i className="fas fa-sort" style={{ marginLeft: '4px' }} /></Link>
                            <ul className="dropdown_1">
                                <li><Link to="/bxh/all">Top all</Link></li>
                                <li><Link to="/bxh/month">Top tháng</Link></li>
                                <li><Link to="/bxh/week">Top tuần</Link></li>
                                <li><Link to="/bxh/day">Top ngày</Link></li>
                                <li><Link to="/">Yêu thích</Link></li>
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