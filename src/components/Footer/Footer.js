import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="mainPart">
                {/* -------------- */}
                <footer>
                    <div className="footer-left-side">
                        <div className>
                            <div className data-type="facebook" data-href="https://www.facebook.com/nettruyen/" data-height={160} data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&app_id=745819368841087&container_width=0&height=160&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2Fnettruyen%2F&locale=en_US&sdk=joey&show_facepile=false&small_header=true">
                                <span style={{ verticalAlign: 'bottom', width: '340px', height: '70px' }}><iframe name="f10957e27ce1a78" width="1000px" height="160px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.0/plugins/page.php?adapt_container_width=true&app_id=745819368841087&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df29c4ebe5a6db7%26domain%3Dwww.nettruyen.com%26origin%3Dhttp%253A%252F%252Fwww.nettruyen.com%252Ff1d771f8bbb3f%26relation%3Dparent.parent&container_width=0&height=160&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2Fnettruyen%2F&locale=en_US&sdk=joey&show_facepile=false&small_header=true" style={{ border: 'none', visibility: 'visible', width: '340px', height: '70px' }} __idm_frm__={72} className /></span></div>
                        </div>
                        <p>
                            Copyright © 2015 NetTruyen
      </p>
                    </div>
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
