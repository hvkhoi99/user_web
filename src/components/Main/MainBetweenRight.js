import React, { Component } from 'react';
import StoryMBRight from '../Story/StoryMBRight'

class MainBetweenRight extends Component {
    render() {
        return (
            <>
                <section className="right-side-item">
                    <div>
                        <div className="trending-tile-container">
                            <ul>
                                <li>
                                    <a href />Top Tháng</li>
                                <li>
                                    <a href />Top Tuần</li>
                                <li>
                                    <a href />Top Ngày</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="order-item">
                                    <div className="order_number">01</div>
                                    <div className="order_infor">
                                        <div>
                                            <a className="thumb" title="Truyện tranh Bách Luyện Thành Thần" href="http://www.nettruyen.com/truyen-tranh/bach-luyen-thanh-than-110924">
                                                <img className="ranking-img-item" src="https://static.8cache.com/cover/o/eJzLyTDT17WITwqMNNQtNKp01A_zNXY1ifQuc8301HeEghwTR_1IV8PsTO-w4HKTUP1iAwC-dBAE/pham-nhan-tu-tien.jpg" data-original="//st.truyenchon.com/data/comics/84/bach-luyen-thanh-than.jpg" alt="Bách Luyện Thành Thần" style={{ display: 'inline' }} />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="title">
                                                <a href="http://www.nettruyen.com/truyen-tranh/bach-luyen-thanh-than-110924">Bách
                      Luyện Thành Thần</a>
                                            </p>
                                            <p className="chapter top">
                                                <a href="http://www.nettruyen.com/truyen-tranh/bach-luyen-thanh-than/chap-639/646892" title="Chapter 639">Chapter 639</a>
                                                <span className="view pull-right">
                                                    <i className="fa fa-eye">
                                                    </i> 7.283.978</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <StoryMBRight/>
                        <StoryMBRight/>
                        <StoryMBRight/>
                        <StoryMBRight/>
                    </div>
                </section>
            </>
        );
    }
}

export default MainBetweenRight;

