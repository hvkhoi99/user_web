import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListStoriesRankDay } from '../../actions/rank'
import Footer from '../Footer/Footer'
import Sticky from '../Header/Sticky'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryRank from '../Story/StoryRank'


class PageBxhDay extends Component {

    componentDidMount() {
        this.props.getStoriesRankDay(5);
    }

    render() {
        const listStoryRank = this.props.storiesRankDay.map((story, index) => {
            return (
                <StoryRank story={story} key={index} />
            )
        })

        console.log(this.props.storiesRankDay);

        return (
            <div className="pageChung pageHis">
                <Sticky />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Bảng xếp hạng <i className="fa fa-angle-right" /></h3>
                            </div>
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
        storiesRankDay: state.storiesRankDay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankDay: (number) => {
            dispatch(getListStoriesRankDay(number))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageBxhDay)
