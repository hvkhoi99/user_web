import Axios from 'axios';
import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import * as Config from '../../constants/Config';



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

    SaveClick = async (story) => {
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

        await Axios.put(`${Config.API_URL}/api/story/` + story.id, { view: story.view + 1 }).then(res => {
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        var { story } = this.props;
        return (
            <div className="recommend-item" style={{ width: '203px' }}>
                <div className="item">
                    <Link to={`/story/${story.id}`} >
                        <img onClick={(name) => this.SaveClick(story)} className="recommendImage" src={story.path_image} alt={story.name} style={{ display: 'inline' }} />
                    </Link>
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
                        <a className="a-chapter-maintop" href={`/story/${story.id}`} title="Chapter 226">Chapter 226</a>
                        <span className="time">12 giờ trước</span>

                    </div>
                </div>
            </div>
        );
    }
}



export default StoryMHeader;
