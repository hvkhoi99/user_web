import moment from 'moment';
import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';

export default class StoryRank extends Component {

    render() {
        const { story } = this.props;
        console.log(story)
        return (
            <div className="recommend-item" style={{ width: '203px' }}>
                <div className="item">
                    <a href={`/story/${story.story_id}`}>
                        <img className="recommendImage" src={story.path_image} alt={story.name} style={{ display: 'inline' }} />
                    </a>
                    <div className="slide-caption">
                        <h4>
                            <Link to={`/story/${story.story_id}`} title={story.name_story}>
                                <LinesEllipsis
                                    // onClick={() => this.SaveClick(story)}
                                    text={story.name_story}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />

                            </Link>
                        </h4>
                        <a className="a-chapter-maintop" href={`/chapter/${story.id}`} title={story.name}>{story.name}</a>
                        <span className="time">{moment(story.created_at).fromNow()}</span>

                    </div>
                </div>
            </div>
        )
    }
}
