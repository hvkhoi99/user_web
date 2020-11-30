import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getChapterByIdRequest } from '../../actions/chapters';
import { getImages } from '../../actions/image';
import Footer from '../Footer/Footer';
import './DetailChapter/DetailChapter.css'
import './DetailChapter/Comment.css'
import { actAddCommentRequest, actGetCommentsRequest } from '../../actions/comments';
import showAlert from '../../reducers/showAlert';
import { actGetStoryByChapterIdRequest } from '../../actions/get_Story';
import Axios from 'axios';
import * as Config from '../../constants/Config';

var moment = require('moment')
class PageImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapterDetail: {

            },
            comments: []
        }
        this.commentRef = React.createRef();
    }


    componentDidMount = async () => {
        const { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getImages(id);
            this.props.getChapterById(id);
            this.props.GetStoryByChapterId(id);
            await this.props.getComments(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.comments) {
            this.setState({
                comments: nextProps.comments
            })
        }
    }

    commentFunc = (e, userLogin) => {
        e.preventDefault();
        if (userLogin) {
            if (this.commentRef.current.value === '') {
                showAlert('Bạn cần phải nhập nội dung bình luận', 'danger');
            }
            else {
                var comment = {
                    content: this.commentRef.current.value,
                    chapter_id: this.props.match.params.id,
                    user_id: JSON.parse(localStorage.getItem('userLogin')).id
                }
                var newComment = {
                    content: this.commentRef.current.value,
                    name: JSON.parse(localStorage.getItem('userLogin')).name,
                }
                var tmp = this.state.comments;
                tmp.unshift(newComment);
                this.setState({ comments: tmp })
                this.props.commentFunc(comment);
                e.target.reset();
            }
        }
        else {
            showAlert('Bạn cần phải đăng nhập để bình luận', 'warning');
        }
    }

    storyClick = async (e, id) => {
        e.preventDefault();
        var { history } = this.props;
        var view;
        await Axios.get(`${Config.API_URL}/api/story/` + id, null).then(response => {
            view = response.data.view;
        }).catch(error => {
            console.log(error)
        })

        await Axios.put(`${Config.API_URL}/api/story/` + id, { view: view + 1 }).then(res => {
            history.push(`/story/${id}`)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        var userLogin = JSON.parse(localStorage.getItem('userLogin'));

        const listImage = this.props.images.map((item, index) => {
            return (
                <img src={item.path_image} alt="" className="read" key={index} />
            )
        })

        const listComment = this.state.comments.map((comment, index) => {
            return (
                <div className="comment-container" key={index}>
                    <div className="comment-item-container">
                        <img src="http://static.truyenqq.com/template/frontend/images/noavatar.png" alt="avatar" /><br />
                    </div>
                    <div className="comment-item">
                        <div className="member-comment-container">
                            <span style={{ fontWeight: 'bold' }}>{comment.name}</span>
                            <span className="member-title">Thành viên</span>
                            <i className="fa fa-clock-o"> </i> {moment(comment.created_at).fromNow()}
                        </div>
                        <div className>{comment.content}</div>
                    </div>
                </div>
            )
        })
        console.log(this.props.comments);
        return (
            <div>
                <div className="div-img-father">

                    {/* phan tren */}
                    <div className="body-container">
                        <div className="Trangchu_theloai">
                            <Link to="/">Trang chủ <i className="fas fa-angle-double-right" /></Link>
                            <Link to={`/story/${this.props.getStory.id}`} onClick={(e) => this.storyClick(e, this.props.getStory.id)}>{this.props.getStory.name}<i className="fas fa-angle-double-right" /></Link>
                            <Link to={`/story/${this.props.chapterDetail.id}`}>{this.props.chapterDetail.name}</Link>
                        </div>
                        <div className="wrap">
                            <div>
                                <span style={{ fontSize: '25px' }}>{this.props.getStory.name}</span>
                                <span style={{ fontSize: '25px' }}>- {this.props.chapterDetail.name} <i style={{ fontSize: 13 }}>(Cập nhật lúc : {moment(this.props.chapterDetail.updated_at).format('YYYY-MM-DD HH:mm:ss')} )</i></span>
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

                    {/* phan anh */}
                    <div className="div-img">
                        {listImage}
                    </div>

                    {/* het phan anh */}

                    {/* phan comment */}
                    <div className="body-cmt-container">
                        <div className="comment-area-container">
                            <div className="Trangchu_theloai">
                                <Link to="/">Trang chủ <i className="fas fa-angle-double-right" /></Link>
                                <Link to={`/story/${this.props.getStory.id}`} onClick={(e) => this.storyClick(e, this.props.getStory.id)}>{this.props.getStory.name} <i className="fas fa-angle-double-right" /></Link>
                                <Link to={`/chapter/${this.props.chapterDetail.id}`}>{this.props.chapterDetail.name}</Link>
                            </div>
                            <div className="link-comment-site-container">
                                <span> <i className="fas fa-comments" /> Bình luận ({this.state.comments.length}) </span>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <form onSubmit={(e) => this.commentFunc(e, userLogin)}>
                                    <textarea ref={this.commentRef} placeholder="Comment Here" style={{ width: '100%', padding: '10px', borderColor: "#dbdbdb", boxShadow: "inset 0 1px 2px rgba(10,10,10,.1)" }} defaultValue={""} />
                                    <button type="submit" className="submit_comment" ></button>
                                </form>

                            </div>
                            <div>
                                {listComment}
                            </div>
                        </div>
                    </div>
                    {/* het phan comment */}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        chapterDetail: state.chapterDetail,
        comments: state.comments,
        getStory: state.getStory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (id) => {
            dispatch(getImages(id));
        },
        getComments: (id) => {
            dispatch(actGetCommentsRequest(id))
        },
        commentFunc: (comment) => {
            dispatch(actAddCommentRequest(comment))
        },
        getChapterById: (id) => {
            dispatch(getChapterByIdRequest(id))
        },
        GetStoryByChapterId: (id) => {
            dispatch(actGetStoryByChapterIdRequest(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageImage)
