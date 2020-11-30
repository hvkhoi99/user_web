import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListStoriesTuesday } from '../../actions/daily'
import Footer from '../Footer/Footer'
import Sticky from '../Header/Sticky'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryChung from '../Story/StoryChung'


class PageTuesday extends Component {

    componentDidMount() {
        this.props.getStoriesTuesday(2);
    }

    render() {
        const listStoryHot = this.props.storiesTuesday.map((story, index) => {
            return (
                <StoryChung story={story} key={index} />
            )
        })

        return (
            <div className="pageChung pageHis">
                <Sticky />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Tuesday <i className="fa fa-angle-right" /></h3>
                            </div>
                            {listStoryHot}
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
        storiesTuesday: state.dailyStories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesTuesday: (day) => {
            dispatch(getListStoriesTuesday(day))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageTuesday)
