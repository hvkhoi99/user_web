import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="mainPart">
                {/* -------------- */}
                <footer>
                    
                    <div className="category-container">
                        <h4>Thể loại</h4>
                        <ul className="category-list">
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/chuyen-sinh">Chuyển
            Sinh</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/dam-my">Đam Mỹ</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/manga">Manga</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/manhua">Manhua</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/han-quoc-114">Manhwa</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/ngon-tinh">Ngôn
            Tình</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/romance">Romance</a>
                            </li>
                            <li>
                                <a target="_self" href="http://www.nettruyen.com/tim-truyen/xuyen-khong">Xuyên
            Không</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>

        );
    }
}



export default Footer;
