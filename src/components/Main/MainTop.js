import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTruyenDCRequest } from '../../actions/story';
import StoryMHeader from '../Story/StoryMHeader';


class MainTop extends Component {

    componentDidMount() {
        this.props.getTruyendecu(5);
    }

    

    render() {

        const listStory = this.props.truyendecu.map((story, index) => {
            return (<StoryMHeader key={index}  story={story} />);

        });

        return (
            <>
                <main>
                    <div className="recommend-title">
                        <h2 className="page-title">Truyện đề cử <i className="fa fa-angle-right" /></h2>
                    </div>
                    <div className="recommendBlock">
                        {listStory}
                    </div>
                </main>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        truyendecu: state.truyendecu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTruyendecu: (number) => {
            dispatch(getTruyenDCRequest(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTop)

