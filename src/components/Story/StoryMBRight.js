import React, { Component } from 'react';

class StoryMBRight extends Component {
    render() {

        var story = this.props.story;

        return (
            <div>
                <ul>
                    <li className="order-item">
                        <div className="order_number">{this.props.stt}</div>
                        <div className="order_infor">
                            <div>
                                <a className="thumb" title={story.name} href={`/story/${story.id}`}>
                                    <img className="ranking-img-item" src={story.path_image} alt="Bách Luyện Thành Thần" style={{ display: 'inline' }} />
                                </a>
                            </div>
                            <div>
                                <p className="title">
                                    <a href={`/story/${story.id}`}>{story.name}</a>
                                </p>
                                <p className="chapter top">
                                    <a href="http://www.nettruyen.com/truyen-tranh/bach-luyen-thanh-than/chap-639/646892" title="Chapter 639">Chapter 639</a>
                                    <span className="view pull-right">
                                        <i className="fa fa-eye">
                                        </i> 7.283.978</span>
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        );
    }
}

export default StoryMBRight;
