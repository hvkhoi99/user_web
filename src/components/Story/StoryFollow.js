import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteStoryFollow } from '../../actions/story';

class StoryFollow extends Component {

    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });

        return result;
    }

    SaveClick = (story) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);
        var list;
        if (dataString) {
            list = JSON.parse(dataString)
        }
        else {
            list = [];
        }

        if (this.findIndex(list, story.id) === -1) {
            list.push(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }

    UnfollowClick = (story_id) =>{

        var dataS = localStorage.getItem('userData');
        var list;
        if (dataS) {
            list = JSON.parse(dataS).id
        }
        else {
            list = [];
        }
        
        this.props.unfollowStory(list, story_id);
        // alert(5+" & "+ story_id);
    }

    render() {
        

        const story = this.props.story;

        return (
            <div className="storyfollow-container">
                <p onClick={()=>this.UnfollowClick(story.id)} className="item-storyfollow unfollow-storyfollow">X</p>
                <Link title={story.name} to={`/story/${story.id}`}>
                    <img className="story-item" onClick={(name) => this.SaveClick(story)} src={story.path_image} className="comic-list-img" data-original="//st.truyenchon.com/data/comics/70/van-gioi-tien-vuong.jpg" alt={story.name} />
                    <h4 className="item-storyfollow name-storyfollow">
                        {/* {story.name} */}
                        <LinesEllipsis
                            onClick={(name) => this.SaveClick(story)}
                            text={story.name}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </h4>
                </Link>

                {/* <div className="view clearfix">
                    <span className="pull-left">
                        <i className="fa fa-eye">
                        </i> 2.108.695 <i className="fa fa-comment" /> 219 <i className="fa fa-heart" />
            15.831</span>
                </div> */}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        unfollowStory: (user_id, story_id) => {
            dispatch(actDeleteStoryFollow(user_id, story_id))
        }
    }
}

export default connect(null, mapDispatchToProps)(StoryFollow)
