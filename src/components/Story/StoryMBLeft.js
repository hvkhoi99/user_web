import Axios from 'axios';
import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListChapters } from '../../actions/chapters';
import * as Config from '../../constants/Config';
import moment from 'moment';


class StoryMBLeft extends Component {

    componentDidMount() {
        const id_story = this.props.story.id;
        this.props.getListChapters(id_story)
    }


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

    render() {

        const nameChapter = this.props.chapters.length!==0 ? this.props.chapters[0].name : '...';
        const timeUpdate = this.props.chapters.length!==0 ? this.props.chapters[0].update_at : '2020-12-12';
        const {story} = this.props;
        return (
            <div>
                <Link title={story.name} to={`/story/${story.id}`}>
                    <img className="story-item comic-list-img" onClick={(name) => this.SaveClick(story)} src={story.path_image} alt={story.name} />
                    <h4>
                        <LinesEllipsis
                            onClick={(name) => this.SaveClick(story)}
                            text={story.name}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </h4>
                    <a className="a-chapter-maintop" href={`/story/${story.id}`} title="chapter">{nameChapter}</a>
                    <span className="time">{moment(timeUpdate).fromNow()}</span>

                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chapters: state.chapters,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListChapters: (id) => {
            dispatch(getListChapters(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryMBLeft)
