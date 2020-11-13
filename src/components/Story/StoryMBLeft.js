import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';

class StoryMBLeft extends Component {
    SaveClick = (name) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);
        var list;
        if (dataString) {
            list = JSON.parse(dataString)
        }
        else {
            list = [];
        }
        list.push(name);
        localStorage.setItem(storyKey, JSON.stringify(list));
    }

    render() {

        const story = this.props.story;

        return (
            <div>
                <Link title={story.name} to={`/story/${story.id}`}>
                    <img className="story-item" onClick={(name)=> this.SaveClick(story)} src={story.path_image} className="comic-list-img" data-original="//st.truyenchon.com/data/comics/70/van-gioi-tien-vuong.jpg" alt={story.name} />
                    <h4>
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

export default StoryMBLeft;
