import React, { Component } from 'react'

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
                        <li className="navigation__item"><a href="/" className="navigation__link">Đăng nhập</a></li>
                        <li className="navigation__item"><a href="/" className="navigation__link">Đăng ký</a></li>
                        <li className="navigation__item"><a href="/" className="navigation__link">Phản hồi</a></li>
                        
                    </ul>
                </div>
            </div>

        )
    }
}
