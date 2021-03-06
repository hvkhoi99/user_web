import React, { Component } from 'react';
import Footer from '../Footer/Footer';
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
                <Footer/>
            </div>
        );
    }
}

export default MainContent;
