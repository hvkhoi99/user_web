import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';


class StoryMHeader extends Component {

    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }

    SaveClick = (story) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);

        var list = (dataString) ? JSON.parse(dataString) : [];
        
        if (this.findIndex(list, story.id) === -1) {
            list.push(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }
    render() {

        var { story } = this.props;
        return (
            <div className="recommend-item" style={{ width: '203px' }}>
                <div className="item">
                    <a href={`/story/${story.id}`}>
                        <img onClick={(name) => this.SaveClick(story)} className="recommendImage" src={story.path_image} alt={story.name} style={{ display: 'inline' }} />
                    </a>
                    <div className="slide-caption">
                        <h4>
                            <Link to={`/story/${story.id}`} title={story.name}>
                                <LinesEllipsis
                                    onClick={(name) => this.SaveClick(story)}
                                    text={story.name}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />

                            </Link>
                        </h4>
                        <a href={`/story/${story.id}`} title="Chapter 226">Chapter 226</a>
                        <span className="time">
                            <i className="fa fa-clock-o">
                            </i> 12 giờ trước</span>
                    </div>
                </div>
            </div>
        );
    }
}



export default StoryMHeader;
