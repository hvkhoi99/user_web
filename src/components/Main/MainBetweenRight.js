import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListStories } from '../../actions/story';
import StoryMBRight from '../Story/StoryMBRight'

class MainBetweenRight extends Component {

    componentDidMount(){
        this.props.getStories();
    }

    render() {

        const listStories = this.props.stories.map((story, index) => {
            if(story.id>12)
            return (<StoryMBRight stt={index+1} key={index} story={story} />);
        });

        return (
            <>
                <section className="right-side-item">
                    <div>
                        <div className="trending-tile-container">
                            <ul>
                                <li>
                                    <a href="/" />Top Tháng</li>
                                <li>
                                    <a href="/" />Top Tuần</li>
                                <li>
                                    <a href="/" />Top Ngày</li>
                            </ul>
                        </div>
                        {listStories}
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stories: state.stories
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getStories: () => {
            dispatch(getListStories());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBetweenRight)


