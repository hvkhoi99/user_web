import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'


class StoryMHeader extends Component {
    render() {
        var story = this.props.story;
        return (
            <div className="recommend-item" style={{ width: '203px' }}>
                <div className="item">
                    <a href="http://www.nettruyen.com/truyen-tranh/ngao-thi-thien-dia-22182">
                        <img className="recommendImage" src={story.path_image} alt={story.name} style={{ display: 'inline' }} />
                    </a>
                    <div className="slide-caption">
                        <h4>
                            <a href={`/story/${story.id}`} title={story.name}>
                                <LinesEllipsis
                                    text={story.name}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />

                            </a>
                        </h4>
                        <a href="http://www.nettruyen.com/truyen-tranh/ngao-thi-thien-dia/chap-226/647054" title="Chapter 226">Chapter 226</a>
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
