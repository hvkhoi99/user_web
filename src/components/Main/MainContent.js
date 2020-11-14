import React, { Component } from 'react';
import MainBottom from './MainBottom';
import MainBetweenLeft from './MainBetweenLeft';
import MainBetweenRight from './MainBetweenRight';
import MainTop from './MainTop'

class MainContent extends Component {
    render() {
        return (
            <div className="header">
                <MainTop />
                
                <div className="mainPart">

                    <div className="comic-list-container">
                        <MainBetweenLeft />
                        <MainBetweenRight />
                    </div>
                    <MainBottom />
                </div>
            </div>
        );
    }
}

export default MainContent;
