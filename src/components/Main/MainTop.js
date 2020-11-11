import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListStories } from '../../actions/story';
import StoryMHeader from '../Story/StoryMHeader';


class MainTop extends Component {

    componentDidMount() {
        this.props.getStories();
    }

    render() {

        const listStory = this.props.stories.map((story, index) => {
            if(story.id>9) return (<StoryMHeader key={index} story={story} />);

        });

        return (
            <>
                <main>
                    <div className="recommend-title">
                        <h2 className="page-title">Truyện đề cử <i className="fa fa-angle-right" /></h2>
                    </div>
                    {/* Block two - slide show */}
                    <div className="recommendBlock">
                        {listStory}
                    </div>
                </main>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStories: () => {
            dispatch(getListStories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTop)

