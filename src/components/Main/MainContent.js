import React, { Component } from 'react';
import Sticky from '../Header/Sticky';
import MainBetweenLeft from './MainBetweenLeft';
import MainBetweenRight from './MainBetweenRight';
import MainBottom from './MainBottom';
import MainTop from './MainTop';

class MainContent extends Component {
    render() {
        return (
            <div className="header">
                <Sticky />
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
