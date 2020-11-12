import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'

class StoryMBLeft extends Component {

    render() {

        const story = this.props.story;

        return (
            <div>
                <a title={story.name} href={`/story/${story.id}`}>
                    <img src={story.path_image} className="comic-list-img" data-original="//st.truyenchon.com/data/comics/70/van-gioi-tien-vuong.jpg" alt={story.name} />
                    <h4>
                        {/* {story.name} */}
                        <LinesEllipsis
                            text={story.name}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </h4>

                </a>
                <div className="view clearfix">
                    <span className="pull-left">
                        <i className="fa fa-eye">
                        </i> 2.108.695 <i className="fa fa-comment" /> 219 <i className="fa fa-heart" />
            15.831</span>
                </div>
                <div>
                    <p>Chapter 18</p>
                    <p>Chapter 17</p>
                    <p>Chapter 16</p>
                </div>
            </div>
        );
    }
}

export default StoryMBLeft;
