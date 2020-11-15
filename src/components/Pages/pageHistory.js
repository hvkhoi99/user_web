import React, { Component } from 'react'
import { connect } from 'react-redux';
import MainBetweenRight from '../Main/MainBetweenRight';
import Phantrang from '../Phantrang';
import StoryHistory from '../Story/StoryHistory';

class PageHistory extends Component {

    componentDidMount() {
        var dataS = localStorage.getItem('list');
        var list = (dataS) ? JSON.parse(dataS) : [];
        this.props.getHistory(list);
    }

    render() {

<<<<<<< HEAD
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
=======
        const listStories = this.props.history.map((story, index) => {
            if (this.props.history) {
                return (<StoryHistory key={index} story={story} />)
>>>>>>> 37ce710650aae54ddaf0fe568dc1dc89b52630b1
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

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: (stories) => {
            dispatch({ type: 'GET_HISTORY', stories })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageHistory)