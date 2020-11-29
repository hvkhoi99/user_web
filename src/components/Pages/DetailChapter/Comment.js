import React, { Component } from 'react'
import './Comment.css'

export default class Comment extends Component {
    render() {
        return (
            <div className="body-cmt-container">
                <div className="comment-area-container">
                    <div className="Trangchu_theloai">
                        <a href>Trang chủ <i className="fas fa-angle-double-right" /></a>
                        <a href>Doraemon <i className="fas fa-angle-double-right" /></a>
                        <a href>Chapter 1</a>
                    </div>
                    <div className="link-comment-site-container">
                        <span> <i className="fas fa-comments" /> Bình luận (4886) </span>
                    </div>

                    <div>
                        <textarea placeholder="Comment Here" style={{ width: '100%', padding: '10px',borderColor: "#dbdbdb", boxShadow: "inset 0 1px 2px rgba(10,10,10,.1)" }} defaultValue={""} />
                    </div>
                    <div>
                        <div className="comment-container">
                            <div className="comment-item-container">
                                <img src="http://static.truyenqq.com/template/frontend/images/noavatar.png" alt="avatar" /><br />
                            </div>
                            <div className="comment-item">
                                <div className="member-comment-container">
                                    <span style={{fontWeight: 'bold'}}>Đinh Yến</span>
                                    <span className="member-title">Thành viên</span>
                                    <i className="fa fa-clock-o"> </i> 5 phút trước 
                                </div>
                                <div className>Mấy thằng hổ báo luôn luôn có một đặc điểm giống nhau đó chính là ngu a</div>
                            </div>
                        </div>

                        <div className="comment-container">
                            <div className="comment-item-container">
                                <img src="http://static.truyenqq.com/template/frontend/images/noavatar.png" alt="avatar" /><br />
                            </div>
                            <div className="comment-item">
                                <div className="member-comment-container">
                                    <span style={{fontWeight: 'bold'}}>Đinh Yến</span>
                                    <span className="member-title">Thành viên</span>
                                    <i className="fa fa-clock-o"> </i> 5 phút trước 
                                </div>
                                <div className>Mấy thằng hổ báo luôn luôn có một đặc điểm giống nhau đó chính là ngu a</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
