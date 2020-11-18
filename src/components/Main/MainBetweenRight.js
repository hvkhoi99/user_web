import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTruyenDCRequest } from '../../actions/story';
import StoryMBRight from '../Story/StoryMBRight';

class MainBetweenRight extends Component {

    componentDidMount() {
        this.props.getTruyendecu(5);
    }

    render() {

        const listStories = this.props.truyendecu.map((story, index) => {

            return (<StoryMBRight stt={index + 1} key={index} story={story} />);
        });

        return (
            <>
                <section className="right-side-item">
                    <div className="trending-tile-container">
                        <ul>
                            <li>
                                <a href="/" />Top Tháng</li>
                            <li>
                                <a className="rank-a" href="/" />Top Tuần</li>
                            <li>
                                <a className="rank-a" href="/" />Top Ngày</li>
                        </ul>
                    </div>
                    {listStories}
                </section>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // stories: state.stories,
        truyendecu: state.truyendecu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getStories: () => {
        //     dispatch(getListStories());
        // },
        getTruyendecu: (number) => {
            dispatch(getTruyenDCRequest(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBetweenRight)


