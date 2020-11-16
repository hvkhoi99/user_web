import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetStoriesFollowRequest } from '../../actions/follow'
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang'
import StoryFollow from '../Story/StoryFollow'

class PageFollow extends Component {

    componentDidMount() {
        var dataS = localStorage.getItem('userLogin');
        var user;
        if (dataS) {
            user = JSON.parse(dataS).id
        }
        else {
            user = [];
        }
        this.props.getStories(user);
    }

    render() {
        const listStories = this.props.getStoriesFollow.map((story, index) => {
            return <StoryFollow key={index} story={story} />
        })

        return (
            <div className="pageChung pageFol">
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Truyện theo dõi <i className="fa fa-angle-right" /></h3>
                            </div>
                            {listStories}
                        </section>
                        <MainBetweenRight />

                    </div>
                    <Phantrang />

                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        getStoriesFollow: state.getStoriesFollow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStories: (user_id) => {
            dispatch(actGetStoriesFollowRequest(user_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFollow)
