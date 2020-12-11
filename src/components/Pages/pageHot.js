import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTruyenHotRequest } from '../../actions/story'
import Footer from '../Footer/Footer'
import Sticky from '../Header/Sticky'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryMHeader from '../Story/StoryMHeader'


class PageHot extends Component {

    componentDidMount() {
        this.props.getStoriesHot(8);
    }

    render() {
        const listStoryHot = this.props.storiesHot.map((story, index) => {
            return (
                <StoryMHeader story={story} key={index} />
            )
        })

        return (
            <div className="pageChung pageHis">
                <Sticky />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Truyện Hot <i className="fa fa-angle-right" /></h3>
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
        storiesHot: state.truyendecu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesHot: (number) => {
            dispatch(getTruyenHotRequest(number))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageHot)