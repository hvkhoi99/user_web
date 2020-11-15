import React, { Component } from 'react';

class StoryMBRight extends Component {
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
            list.unshift(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }
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
                                    <img onClick={(name)=> this.SaveClick(story)} className="ranking-img-item" src={story.path_image} alt="Bách Luyện Thành Thần" style={{ display: 'inline' }} />
                                </a>
                            </div>
                            <div>
                                <p className="title">
                                    <a onClick={(name) => this.SaveClick(story)} href={`/story/${story.id}`}>{story.name}</a>
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
