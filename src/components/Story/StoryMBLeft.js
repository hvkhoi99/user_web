import Axios from 'axios';
import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import * as Config from '../../constants/Config';


class StoryMBLeft extends Component {
    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });

        return result;
    }

    SaveClick = async(story) => {
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

    render() {

        const story = this.props.story;

        return (
            <div>
                <Link title={story.name} to={`/story/${story.id}`}>
                    <img className="story-item comic-list-img" onClick={(name) => this.SaveClick(story)} src={story.path_image} data-original="//st.truyenchon.com/data/comics/70/van-gioi-tien-vuong.jpg" alt={story.name} />
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
