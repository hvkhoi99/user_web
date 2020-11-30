import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListStoriesRankWeek } from '../../actions/rank'
import Footer from '../Footer/Footer'
import Sticky from '../Header/Sticky'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryRank from '../Story/StoryRank'


class PageBxhWeek extends Component {

    componentDidMount() {
        this.props.getStoriesRankWeek(5);
    }

    render() {
        const listStoryRank = this.props.storiesRankWeek.map((story, index) => {
            return (
                <StoryRank story={story} key={index} />
            )
        })

        console.log(this.props.storiesRankWeek);

        return (
            <div className="pageChung pageHis">
                <Sticky />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Bảng xếp hạng <i className="fa fa-angle-right" /></h3>
                            </div>
                            {/* {this.renderStoryRank()} */}
                            {listStoryRank}
                        </section>
                        <MainBetweenRight />
                    </div>
                    <Phantrang />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storiesRankWeek: state.storiesRankWeek,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankWeek: (number) => {
            dispatch(getListStoriesRankWeek(number))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageBxhWeek)
