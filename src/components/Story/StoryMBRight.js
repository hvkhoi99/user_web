import React, { Component } from 'react';

class StoryMBRight extends Component {

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

        var list = (dataString) ? JSON.parse(dataString) : [];

        if (this.findIndex(list, story.id) === -1) {
            list.unshift(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
        if (this.findIndex(list, story.id) === -1) {
            list.push(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }
    render() {
        // console.log(this.props.story);
        const { story } = this.props;
        return (
            <div>
                <ul>
                    <li className="order-item">
                        <div className="order_number">{this.props.stt}</div>
                        <div className="order_infor">
                            <div>
                                <a className="thumb" title={story.name_story} href={`/story/${story.story_id}`}>
                                    <img className="ranking-img-item" src={story.path_image} alt="ttt" style={{ display: 'inline' }} />
                                </a>
                            </div>
                            <div>
                                <p className="title">
                                    <a href={`/story/${story.id}`}>{story.name_story}</a>
                                </p>
                                <p className="chapter top">
                                    <a href="/" title="Chapter 639">{story.name}</a>
                                    <span className="view pull-right">
                                        <i className="fa fa-eye">
                                        </i>{story.view}</span>
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
