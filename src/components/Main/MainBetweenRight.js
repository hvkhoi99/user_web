import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListStoriesRankDay, getListStoriesRankMonth, getListStoriesRankWeek } from '../../actions/rank';
import StoryMBRight from '../Story/StoryMBRight';

class MainBetweenRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listStories: []
        }
    }


    componentDidMount() {
        this.props.getStoriesRankWeek(5);
        this.props.getStoriesRankMonth(2020, 11, 5);
        this.props.getStoriesRankDay(5);
    }

    renderWeek = () => {
        const listStories = this.props.storiesRankWeek.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        this.setState({ listStories: listStories });
    }

    renderMonth = () => {
        const listStories = this.props.storiesRankMonth.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        this.setState({ listStories: listStories });
    }
    renderDay = () => {
        const listStories = this.props.storiesRankDay.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        this.setState({ listStories: listStories });
    }

    render() {

        const listStoriess = this.props.storiesRankMonth.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        // console.log(this.props.storiesRankMonth)

        return (
            <>
                <section className="right-side-item">
                    <div className="trending-tile-container">
                        <ul>
                            <li onClick={() => this.renderMonth()}>
                                Top Tháng</li>
                            <li onClick={() => this.renderWeek()}>
                                Top Tuần</li>
                            <li onClick={() => this.renderDay()}>
                                Top Ngày</li>
                        </ul>
                    </div>
                    {/* {listStoriess} */}
                    {/* {this.state.listStories} */}
                    {(this.state.listStories.length !== 0) ? (this.state.listStories) : listStoriess}
                </section>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesRankMonth: state.storiesRankMonth,
        storiesRankWeek: state.storiesRankWeek,
        storiesRankDay: state.storiesRankDay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankMonth: (year, month, number) => {
            dispatch(getListStoriesRankMonth(year, month, number))
        },
        getStoriesRankWeek: (number) => {
            dispatch(getListStoriesRankWeek(number))
        },
        getStoriesRankDay: (number) => {
            dispatch(getListStoriesRankDay(number))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBetweenRight)


