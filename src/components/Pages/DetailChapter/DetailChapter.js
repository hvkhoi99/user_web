import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailChapterRequest } from '../../../actions/chapters'
import './DetailChapter.css'

class DetailChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapterDetail: []
        }
    }

    render() {
      
        return (
            <div className="body-container">
                <div className="Trangchu_theloai">
                    <a href>Trang chủ <i className="fas fa-angle-double-right" /></a>
                    <a href>Doraemon <i className="fas fa-angle-double-right" /></a>
                    <a href>Chapter 1</a>
                </div>
                <div className="wrap">
                    <div>
                        <a href style={{ fontSize: '25px' }}>Doraemon</a>
                        <span style={{ fontSize: '25px' }}>- Chapter 1 <i style={{ fontSize: 13 }}>(Cập nhật lúc : 12:57 20/11/2020)</i></span>
                    </div>

                    <div className="chapter-nav-container server-container">
                        <div>
                            <a href title="Chương trước">
                                <button style={{ padding: '2px 4px' }}>
                                    <i className="fas fa-less-than" />
                                </button>
                            </a>

                            <select style={{ width: '200px', padding: '2px' }}>
                                <option>Chapter 12</option>
                                <option>Chapter 13</option>
                            </select>

                            <a href title="Chương sau">
                                <button style={{ padding: '2px 4px' }}>
                                    <i className="fas fa-greater-than" />
                                </button>
                            </a>

                            <button style={{ padding: '2px', fontWeight: 500 }}> Đọc truyện </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        // chapterDetail: state.chapterDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailChapter: (id) => {
            dispatch(getDetailChapterRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailChapter)

// getDetailChapterRequest