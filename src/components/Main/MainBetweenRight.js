import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListStoriesRankDay, getListStoriesRankMonth, getListStoriesRankWeek } from '../../actions/rank';
import StoryMBRight from '../Story/StoryMBRight';

class MainBetweenRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listStories: [],
            monthActive: true,
            weekActive: false,
            dayActive: false,
        }
    }


    componentDidMount() {
        this.props.getStoriesRankWeek(5);
        this.props.getStoriesRankMonth(2020, 11, 5);
        this.props.getStoriesRankDay(5);
    }

    renderWeek = () => {
        if (!this.state.weekActive) {
            this.setState({
                monthActive: false,
                weekActive: true,
                dayActive: false,
            })
        }
        const listStories = this.props.storiesRankWeek.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        this.setState({ listStories: listStories });
    }

    renderMonth = () => {
        if (!this.state.monthActive) {
            this.setState({
                monthActive: true,
                weekActive: false,
                dayActive: false,
            })
        }
        const listStories = this.props.storiesRankMonth.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });
        this.setState({ listStories: listStories });
    }
    renderDay = () => {
        if (!this.state.dayActive) {
            this.setState({
                monthActive: false,
                weekActive: false,
                dayActive: true,
            })
        }
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
                            <li onClick={() => this.renderMonth()} style={{ color: (this.state.monthActive) ? '#FF6347' : 'black' }}>
                                Top Tháng</li>
                            <li onClick={() => this.renderWeek()} style={{ color: (this.state.weekActive) ? '#FF6347' : 'black' }}>
                                Top Tuần</li>
                            <li onClick={() => this.renderDay()} style={{ color: (this.state.dayActive) ? '#FF6347' : 'black' }}>
                                Top Ngày</li>
                        </ul>
                    </div>
                    {listStoriess}
                    {/* {this.state.listStories} */}
                    {/* {(this.state.listStories.length !== 0) ? (this.state.listStories) : listStoriess} */}
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


