import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import moment from 'moment';


class StoryMHeader extends Component {

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
    render() {

        var { story } = this.props;
        // console.log(story)
        return (
            <div className="recommend-item" style={{ width: '203px' }}>
                <div className="item">
                    <a href={`/story/${story.id}`}>
                        <img onClick={() => this.SaveClick(story)} className="recommendImage" src={story.path_image} alt={story.name} style={{ display: 'inline' }} />
                    </a>
                    <div className="slide-caption">
                        <h4>
                            <Link to={`/story/${story.id}`} title={story.name}>
                                <LinesEllipsis
                                    onClick={() => this.SaveClick(story)}
                                    text={story.name}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                            </Link>
                        </h4>
                        <a className="a-chapter-maintop" href={`/story/${story.id}`} title="chapter">Chapter 226</a>
                        <span className="time">{moment(story.created_at).fromNow()}</span>

                    </div>
                </div>
            </div>
        );
    }
}



export default StoryMHeader;
