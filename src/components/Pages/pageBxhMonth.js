import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListStoriesRankMonth } from '../../actions/rank'
import Footer from '../Footer/Footer'
import Sticky from '../Header/Sticky'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryRank from '../Story/StoryRank'


class PageBxhMonth extends Component {

    componentDidMount() {
        this.props.getStoriesRankMonth(2020, 11, 5);
    }

    render() {
        const listStoryRank = this.props.storiesRankMonth.map((story, index) => {
            return (
                <StoryRank story={story} key={index} />
            )
        })

        console.log(this.props.storiesRankMonth);

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
        storiesRankMonth: state.storiesRankMonth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankMonth: (year, month, number) => {
            dispatch(getListStoriesRankMonth(year, month, number))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageBxhMonth)
