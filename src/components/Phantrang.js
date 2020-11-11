import React, { Component } from 'react'

export default class Phantrang extends Component {
    render() {
        return (
            <div id="nextBar" className="navMenu" style={{ width: '66%', marginLeft: '5%' }}>
                <ul className>
                    <li className="hidden">Trang 2 / 515 </li>
                    <li><a href="http://www.nettruyen.com/" title="Trang đầu tiên">«</a> </li>
                    <li><a className="prev-page" href="http://www.nettruyen.com/" title="Quay lại trang 1">‹</a> </li>
                    <li><a href="http://www.nettruyen.com/" title="Hiện kết quả 1 tới 36 / 18540">1</a> </li>
                    <li className="active"><a href="http://www.nettruyen.com/?page=2" title="Đang hiện kết quả 37 tới 72 / 18540">2</a> </li>
                    <li><a href="http://www.nettruyen.com/?page=3" title="Hiện kết quả 73 tới 108 / 18540">3</a> </li>
                    <li><a href="http://www.nettruyen.com/?page=4" title="Hiện kết quả 109 tới 144 / 18540">4</a> </li>
                    <li><a href="http://www.nettruyen.com/?page=5" title="Hiện kết quả 145 tới 180 / 18540">5</a> </li>
                    <li className="PagerSSCCells"><a href="http://www.nettruyen.com/?page=90" title="Hiện kết quả 3205 tới 3240 / 18540">90</a> </li>
                    <li className="PagerSSCCells"><a href="http://www.nettruyen.com/?page=170" title="Hiện kết quả 6085 tới 6120 / 18540">170</a> </li>
                    <li className="PagerSSCCells"><a href="http://www.nettruyen.com/?page=260" title="Hiện kết quả 9325 tới 9360 / 18540">260</a> </li>
                    <li className="PagerSSCCells"><a href="http://www.nettruyen.com/?page=340" title="Hiện kết quả 12205 tới 12240 / 18540">340</a> </li>
                    <li className="PagerSSCCells"><a href="http://www.nettruyen.com/?page=430" title="Hiện kết quả 15445 tới 15480 / 18540">430</a> </li>
                    <li><a className="next-page" href="http://www.nettruyen.com/?page=3" title="Chuyển đến trang 3">›</a> </li>
                    <li><a href="http://www.nettruyen.com/?page=515" title="Trang cuối">»</a> </li>
                </ul>
            </div>
        )
    }
}
