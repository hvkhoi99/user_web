import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTruyenHotRequest } from '../../actions/story';
import StoryMHeader from '../Story/StoryMHeader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

};

class MainTop extends Component {

    componentDidMount() {
        this.props.getTruyendecu(5);
    }

    render() {

        const listStory = this.props.truyendecu.map((story, index) => {
            return (<StoryMHeader key={index} story={story} />);

        });

        return (
            <>
                <main>
                    <div className="recommend-title">
                        <h2 className="page-title">Truyện đề cử <i className="fa fa-angle-right" /></h2>
                    </div>
                    <div className="div-Slider-container">
                        <div className="recommendBlock">
                            <Slider {...settings}>
                                {listStory}
                            </Slider>
                        </div>
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
            dispatch(getTruyenHotRequest(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTop)

