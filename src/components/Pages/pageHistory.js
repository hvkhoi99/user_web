import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListStories } from '../../actions/story'
import MainBetweenRight from '../Main/MainBetweenRight';
import Phantrang from '../Phantrang';
import StoryMBLeft from '../Story/StoryMBLeft'

class PageHistory extends Component {

    componentDidMount() {
        this.props.getStories();
    }


    render() {

        var dataS = localStorage.getItem('list');
        var list;
        if (dataS) {
            list = JSON.parse(dataS)
        }
        else {
            list = [];
        }

        console.log(JSON.parse(dataS));

        const listStories = list.map((story, index) => {
            if(list)
            {
                return (<StoryMBLeft key={index} story={story} />)
            }
            else return (<></>);
        });

        return (
            <>
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item ">
                            <div className="introduction-item introduction-item-1">
                                <h3 className="page-title">Lịch sử đọc truyện <i className="fa fa-angle-right" /></h3>
                            </div>
                            {listStories}
                        </section>
                        <MainBetweenRight />

                    </div>
                    <Phantrang />

                </div>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stories: state.stories
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getStories: () => {
            dispatch(getListStories())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageHistory)
