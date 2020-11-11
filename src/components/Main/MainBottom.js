import React, { Component } from 'react';
import Phantrang from '../Phantrang';

class MainBottom extends Component {
    render() {
        return (
            <>
                <Phantrang/>
                <div id="optionBar" className="navMenu">
                    <ul className="list-inline">
                        <li>
                            <a href="/" title="Truyen tranh">
                                <strong>Truyen tranh</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="Truyện tranh">
                                <strong>Truyện tranh</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="Truyen tranh online">
                                <strong>Truyen tranh online</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="Truyện tranh online">
                                <strong>Truyện tranh online</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="Doc truyen tranh">
                                <strong>Doc truyen tranh</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="Đọc truyện tranh">
                                <strong>Đọc truyện tranh</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default MainBottom;
