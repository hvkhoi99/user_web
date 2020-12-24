import Axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actGetAuthorByStoryIdRequest } from '../../actions/author';
import { actFetchCategoriesRequest } from '../../actions/category_stories';
import { getListChapters } from '../../actions/chapters';
import { actFollowRequest, actGetStoriesFollowRequest } from '../../actions/follow';
import { actGetStory } from '../../actions/get_Story';
import { actDeleteStoryFollow } from '../../actions/story';
import Footer from '../Footer/Footer';
import Sticky from '../Header/Sticky';
import MainBetweenRight from '../Main/MainBetweenRight';
import * as Config from '../../constants/Config';


// var moment = require('moment')
class PageStory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonCheck: false,
        }
    }


    componentDidMount() {
        var { match } = this.props;

        if (match) {
            var id = match.params.id;

            this.props.getStoryById(id);
            this.props.getCateByStoryId(id);

            this.props.getAuthorByStoryId(id);
            this.props.getListChapters(id);

            if (this.props.checkLogin) {
                var userString = localStorage.getItem('userLogin');
                var userLogin = (userString) ? JSON.parse(userString) : null;
                if (userLogin !== null) {
                    Axios.get(`${Config.API_URL}/api/check-follow/user/${userLogin.id}/story/${id}`).then(res => {
                        if (res.data > 0) this.setState({ buttonCheck: true })
                    })
                }
            }
        }
    }

    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result;
    }


    FollowClick = async () => {
        var { history } = this.props;
        var follows = this.props.getStory.follow;
        if (this.props.checkLogin === null) {
            if (window.confirm("Bạn cần phải đăng nhập!")) {
                history.push('/login');
            }
        } else {
            var userCurrent = JSON.parse(localStorage.getItem('userLogin'));
            var story = {
                story_id: this.props.match.params.id,
                user_id: userCurrent.id
            }

            if (this.state.buttonCheck) {
                follows -= 1;
                await Axios.put(`${Config.API_URL}/api/story/` + story.story_id, { follow: follows }).then(res => {
                }).catch(err => {
                    console.log(err)
                })
                this.props.unfollowStory(story.user_id, story.story_id);
                this.setState({ buttonCheck: false })
            }
            else {
                follows += 1;
                await Axios.put(`${Config.API_URL}/api/story/` + story.story_id, { follow: follows }).then(res => {
                }).catch(err => {
                    console.log(err)
                })
                this.props.followStory(story);
                this.setState({ buttonCheck: true })
            }


        }
    }

    chapterClick = async (e, id) => {
        e.preventDefault();
        var { history } = this.props;
        var view;
        await Axios.get(`${Config.API_URL}/api/chapter/` + id, null).then(response => {
            view = response.data.view;
        }).catch(error => {
            console.log(error)
        })

        await Axios.put(`${Config.API_URL}/api/chapter/` + id, { view: view + 1 }).then(res => {
            history.push(`/chapter/${id}`)
        }).catch(err => {
            console.log(err)
        })
    }



    render() {
        // console.log(this.props.chapters[0])
        const followText = (this.state.buttonCheck) ? (
            <Link to={`/story/${this.props.match.params.id}`} style={{ color: 'red' }}>
                <i className="fa fa-heart " /> <span >Theo dõi</span>
            </Link>
        ) : (
                <Link to={`/story/${this.props.match.params.id}`} style={{ color: 'black' }}>
                    <i className="fa fa-heart " /> <span >Theo dõi</span>
                </Link>
            )

        const listChapter = this.props.chapters.map((chapter, index) => {
            return (
                <li key={index}>
                    <div>
                        <span className="left-list-item">
                            <Link to={`/chapter/${chapter.id}`} onClick={(e) => this.chapterClick(e, chapter.id)}>{chapter.name}</Link>
                        </span>
                        <span className="center-list-item">
                            {moment(chapter.created_at).format("L")}
                        </span>
                        <span className="right-list-item">{new Intl.NumberFormat().format(chapter.view)}</span>
                    </div>
                </li>
            );
        });

        const listCate = this.props.getCategorybyIdStory.map((cate, index) => {
            return (<a href={`/category/${cate.id}`} key={index} className='pdRight'>{cate.name}</a>)
        })

        return (
            <div className="pageChung pageStory">
                <Sticky />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item-manga">
                            <div className="manga-title-container">
                                <h1 className="title-detail">{this.props.getStory.name}</h1>
                                <time className="small">
                                    [Cập nhật lúc:
                                    20/11/2020
                                    ]
                                </time>
                            </div>
                            <div className="manga-infor-container">
                                <div className="left-side-manga-infor">
                                    <img src={this.props.getStory.path_image} alt={this.props.getStory.name} />
                                </div>
                                <div className="right-side-manga-infor ">
                                    <div>
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li>
                                                <span className="manga-status-left"> <i className="fa fa-user "></i> Tác giả   </span>
                                                <span className="manga-status-right">{(this.props.author == null) ? 'Đang cập nhật' : this.props.author.name}</span>
                                            </li>
                                            <li>
                                                <span className="manga-status-left"> <i className="fa fa-rss "> </i> Tình trạng  </span>
                                                <span className="manga-status-right">{(this.props.getStory.status === 'updating') ? 'Đang cập nhật' : 'Hoàn thành'}</span>
                                            </li>
                                            <li>
                                                <span className="manga-status-left"> <i className="fa fa-tags "> </i> Thể loại</span>
                                                <span className="manga-status-right manga-status-right-theloai">
                                                    {listCate}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="manga-status-left"> <i className="fa fa-eye "> </i> Lượt xem </span>
                                                <span className="manga-status-right">{new Intl.NumberFormat().format(this.props.getStory.view)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="ranking-item-container">
                                            <span itemProp="aggregateRating " itemScope=" " itemType="https://schema.org/AggregateRating "> Xếp hạng: <span itemProp="ratingValue ">3.7</span>/5 - <span itemProp="ratingCount ">425</span> Lượt đánh giá.</span>
                                        </div>
                                        <div className="ranking-item-container">
                                            <span style={{ paddingRight: '2%', marginRight: '70px' }}>
                                                <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                                <i className="fas fa-star " />
                                            </span>
                                            <button style={{ width: '120px' }}>
                                                <i className="far fa-thumbs-up " />
                                                <span>Like 1</span>
                                            </button>
                                            <button style={{ width: '120px', marginLeft: '10px' }}>
                                                <i className="fas fa-share " />
                                                <span>Share</span>
                                            </button>
                                        </div>
                                        <div className="ranking-item-container">

                                            <button onClick={() => this.FollowClick()} style={{ width: '120px', marginRight: '5px' }}>
                                                {followText}
                                            </button>

                                            <b>{new Intl.NumberFormat().format(this.props.getStory.follow)}</b> Người Đã Theo Dõi
                                        </div>
                                        <div className="ranking-item-container">
                                            <button style={{ width: '120px' }}>
                                                <Link to="/ ">
                                                    Đọc từ đầu</Link>
                                            </button>
                                            <button style={{ width: '150px', marginLeft: '10px' }}>
                                                <Link to="/">
                                                    Đọc mới nhất</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderBottom: '2px blue solid' }}>
                                <h3 style={{ color: 'rgb(74, 74, 100)' }}> <i className="fas fa-file" />Nội dung</h3>
                                <p style={{ fontSize: '16px' }}>{this.props.getStory.description}</p>
                            </div>
                            <div>
                                <div style={{ borderBottom: '2px blue solid' }}>
                                    <h2>  <i className="fa fa-list "> </i> Danh sách chương </h2>
                                </div>
                                <nav>
                                    <ul style={{ listStyleType: 'none' }} className="content-list">
                                        <li>
                                            <div>
                                                <span className="left-list-item">Số chương</span>
                                                <span className="center-list-item">Cập nhật</span>
                                                <span className="right-list-item">Lượt xem</span>
                                            </div>
                                        </li>
                                        {listChapter}
                                    </ul>
                                </nav>
                            </div>
                        </section>
                        <MainBetweenRight />
                    </div>
                </div>
                <Footer />
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        getStory: state.getStory,
        getCategorybyIdStory: state.getCategorybyIdStory,
        author: state.author,
        chapters: state.chapters,
        checkLogin: state.checkLogin,
        getStoriesFollow: state.getStoriesFollow,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoryById: (id) => {
            dispatch(actGetStory(id))
        },

        getCateByStoryId: (id) => {
            dispatch(actFetchCategoriesRequest(id))
        },

        getAuthorByStoryId: (id) => {
            dispatch(actGetAuthorByStoryIdRequest(id));
        },

        getListChapters: (id) => {
            dispatch(getListChapters(id));
        },
        followStory: (story) => {
            dispatch(actFollowRequest(story));
        },
        unfollowStory: (user_id, story_id) => {
            dispatch(actDeleteStoryFollow(user_id, story_id))
        },
        getFollowStories: (user_id) => {
            dispatch(actGetStoriesFollowRequest(user_id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageStory)
