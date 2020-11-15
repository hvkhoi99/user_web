import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

    UnfollowClick = (story_id) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);

        var list = (dataString) ? JSON.parse(dataString) : [];
        if (this.findIndex(list, story_id) !== -1) {
            list.splice(this.findIndex(list, story_id), 1);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }

    render() {

        const story = this.props.story;

        return (
            <div>
                <Link to="/history"><p onClick={() => this.UnfollowClick(story.id)} className="item-storyfollow unfollow-storyfollow">X</p></Link>
                <Link title={story.name} to={`/story/${story.id}`}>
                    <img className="story-item" src={story.path_image} className="comic-list-img" alt={story.name} />
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
        );
    }
}

export default StoryHistory;

