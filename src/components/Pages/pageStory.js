import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actFetchAuthorsRequest } from '../../actions/author';
import { actFetchCategoriesRequest } from '../../actions/category_stories';
import { actGetStory } from '../../actions/get_Story'
import MainBetweenRight from '../Main/MainBetweenRight';

class PageStory extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStoryById(id);
            this.props.getCateByStoryId(id);
            this.props.fetchAllAuthors();
        }
    }

    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }
    getNameAuthor = (list, id) => {
        if (list.length > 0) {
            let name = (id === null) ? 'Đang cập nhật' : list[this.findIndex(list, id)].name;
            return name;
        }
    }


    render() {


        const listCate = this.props.getCategorybyIdStory.map((cate, index) => {
            return (<a href={`/category/${cate.id}`} key={index} className='pdRight'>{cate.name}</a>)
        })



        console.log(this.props.getStory);

        return (
            <div className="mainPart">

                {/* Block two - slide show */}
                <div className="comic-list-container">
                    <section className="left-side-item-manga">
                        <div className="manga-title-container">
                            <h1 className="title-detail">{this.props.getStory.name}</h1>
                            <time className="small">
                                [Cập nhật lúc: 09:25 08/11/2020]
          </time>
                        </div>
                        <div className="manga-infor-container">
                            <div className="left-side-manga-infor">
                                <img style={{ width: '100px', height: '100px' }} src={this.props.getStory.path_image} alt="Đô Thị Tuyệt Thế Cuồng Tôn " style={{ marginTop: '50px' }} />
                            </div>
                            <div className="right-side-manga-infor ">
                                <div>
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li>
                                            <span className="manga-status-left">
                                                <i className="fa fa-user ">
                                                </i> Tác giả
                  </span>
                                            <span className="manga-status-right">{this.getNameAuthor(this.props.authors, this.props.getStory.author_id)}</span>
                                        </li>
                                        <li>
                                            <span className="manga-status-left">
                                                <i className="fa fa-rss ">
                                                </i> Tình trạng
                  </span>
                                            <span className="manga-status-right">Đang tiến hành</span>
                                        </li>
                                        <li>
                                            <span className="manga-status-left">
                                                <i className="fa fa-tags ">
                                                </i> Thể loại</span>
                                            <span className="manga-status-right">
                                                {listCate}
                                            </span>
                                        </li>
                                        <li className=" ">
                                            <span className="manga-status-left">
                                                <i className="fa fa-eye ">
                                                </i> Lượt xem
                  </span>
                                            <span className="manga-status-right">308.790</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="ranking-item-container">

                                        <span itemProp="aggregateRating " itemScope=" " itemType="https://schema.org/AggregateRating "> Xếp hạng: <span itemProp="ratingValue ">3.7</span>/5 - <span itemProp="ratingCount ">425</span> Lượt đánh giá.</span>
                                    </div>
                                    <div className="ranking-item-container">
                                        <span style={{ paddingRight: '2%', marginRight: '100px' }}>
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
                                        <button style={{ width: '120px' }}>
                                            <i className="fas fa-share " />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                    <div className="ranking-item-container">
                                        <button style={{ width: '120px', marginRight: '5px' }}>
                                            <a className=" ">
                                                <i className="fa fa-heart " /> <span>Theo dõi</span>
                                            </a>
                                            <span>
                                            </span></button>
                                        <b>8.003</b> Người Đã Theo Dõi
              </div>
                                    <div className="ranking-item-container">
                                        <button style={{ width: '120px' }}>
                                            <a className=" " href="http://www.nettruyen.com/truyen-tranh/do-thi-tuyet-the-cuong-ton/chap-0/651717 ">
                                                Đọc từ đầu</a>
                                        </button>
                                        <button style={{ width: '150px' }}>
                                            <a className=" " href="http://www.nettruyen.com/truyen-tranh/do-thi-tuyet-the-cuong-ton/chap-17/656548 ">
                                                Đọc mới nhất</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className style={{ borderBottom: '2px blue solid' }}>
                            <h3 style={{ color: 'rgb(74, 74, 100)' }}>
                                <i className="fas fa-file" />
            Nội dung
          </h3>
                            <p />
                        </div>
                        <div className=" ">
                            <div className style={{ borderBottom: '2px blue solid' }}>
                                <h2 className=" ">
                                    <i className="fa fa-list ">
                                    </i> Danh sách chương
            </h2>
                            </div>
                            <nav>
                                <ul style={{ listStyleType: 'none' }} className="content-list">
                                    <li className>
                                        <div>
                                            <span className="left-list-item">Số chương</span>
                                            <span className="center-list-item">Cập nhật</span>
                                            <span className="right-list-item">Lượt xem</span>
                                        </div>
                                    </li>

                                    <li className=" ">
                                        <div>
                                            <span className="left-list-item">
                                                <a href="http://www.nettruyen.com/truyen-tranh/do-thi-tuyet-the-cuong-ton/chap-17/656548 ">Chapter
                      17</a>
                                            </span>
                                            <span className="center-list-item">1 giờ trước</span>
                                            <span className="right-list-item">2.527</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <MainBetweenRight />

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        getStory: state.getStory,
        getCategorybyIdStory: state.getCategorybyIdStory,
        authors: state.authors,
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

        fetchAllAuthors: () => {
            dispatch(actFetchAuthorsRequest())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageStory)
