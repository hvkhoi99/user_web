import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

class StoryHistory extends Component {
    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }

    RemoveHisClick = (story_id) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);

        var list = (dataString) ? JSON.parse(dataString) : [];
        if (this.findIndex(list, story_id) !== -1) {
            list.splice(this.findIndex(list, story_id), 1);
            localStorage.setItem(storyKey, JSON.stringify(list));
            this.props.deleteHistory(story_id)
        }
    }
    render() {
        const story = this.props.story;
        return (
            <>
                <div>
                    <Link to="/history"><p onClick={() => this.RemoveHisClick(story.id)} className="item-storyfollow unfollow-storyfollow">X</p></Link>
                    <Link title={story.name} to={`/story/${story.id}`}>
                        <img className="story-item comic-list-img" src={story.path_image} alt={story.name} />
                        <h4>
                            <LinesEllipsis
                                text={story.name}
                                maxLine='1'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                        </h4>
                    </Link>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteHistory: (id) => {
            dispatch({ type: 'DELETE_HISTORY', id })
        }
    }
}
export default connect(null, mapDispatchToProps)(StoryHistory)

