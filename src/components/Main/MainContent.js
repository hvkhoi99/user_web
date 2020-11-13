import React, { Component } from 'react';
import MainBottom from './MainBottom';
import MainBetweenLeft from './MainBetweenLeft';
import MainBetweenRight from './MainBetweenRight';
import MainTop from './MainTop'

class MainContent extends Component {
    render() {
        return (
            <>
                <MainTop />
                <div className="mainPart">
                    <div className="comic-list-container">
                        <MainBetweenLeft />
                        <MainBetweenRight />
                    </div>
                    <MainBottom />
                </div>
            </>
        );
    }
}

export default MainContent;
