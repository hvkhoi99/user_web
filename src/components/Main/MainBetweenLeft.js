import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListStories } from '../../actions/story';
import MyContext from '../../myContext';
import StoryMBLeft from '../Story/StoryMBLeft';

class MainBetweenLeft extends Component {
    componentDidMount() {
        this.props.getStories();
    }
    
    render() {
        
        const listStories = this.props.stories.map((story, index) => {
            return (<StoryMBLeft key={index} story={story}/>)
        })

        return (
            <>
                <section className="left-side-item">
                    <div className="introduction-item introduction-item-1">
                        <h3 className="page-title">Truyện mới cập nhật <i className="fa fa-angle-right" /></h3>
                    </div>
                    {listStories}                    
                </section>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStories: () => {
            dispatch(getListStories());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBetweenLeft)






