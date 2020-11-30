import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Config from '../../constants/Config';

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

    SaveClick = async (story) => {
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


        await Axios.put(`${Config.API_URL}/api/story/` + story.id, { view: story.view + 1 }).then(res => {
        }).catch(err => {
            console.log(err)
        })
    }

    chapterClick = async (id) => {
        var view;
        await Axios.get(`${Config.API_URL}/api/chapter/` + id, null).then(response => {
            view = response.data.view;
        }).catch(error => {
            console.log(error)
        })

        await Axios.put(`${Config.API_URL}/api/chapter/` + id, { view: view + 1 }).then(res => {
        }).catch(err => {
            console.log(err)
        })
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
                                    <a href={`/story/${story.story_id}`} >{story.name_story}</a>
                                </p>
                                <p className="chapter top">
                                    <Link to={`/chapter/${story.id}`} title={story.name} onClick={() => this.chapterClick(story.id)}>{story.name}</Link>
                                    <span className="view pull-right">
                                        <i className="fa fa-eye">
                                        </i>{new Intl.NumberFormat().format(story.view)}</span>
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
