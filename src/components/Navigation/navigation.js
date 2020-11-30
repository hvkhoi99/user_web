import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <div className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to="/" className="navigation__link">Trang chủ</Link></li>
                        <li className="navigation__item"><Link to="/login" className="navigation__link">Đăng nhập</Link></li>
                        <li className="navigation__item"><Link to="/register" className="navigation__link">Đăng ký</Link></li>
                    </ul>
                </div>
            </div>

        )
    }
}
