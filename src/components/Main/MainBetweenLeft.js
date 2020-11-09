import React, { Component } from 'react';
import MyContext from '../../myContext';
import StoryMBLeft from '../Story/StoryMBLeft';

class MainBetweenLeft extends Component {
    render() {
        // const listStory = this.context.listStory.map((item, index) => {
        //     <Story story={item} key={index} name="Vạn Giới Tiên Vương"/>
        // })
        // console.log(listStory);

        return (
            <>

                <section className="left-side-item">
                    <div className="introduction-item">
                        <h3 className="page-title">Truyện mới cập nhật <i className="fa fa-angle-right" /></h3>
                    </div>
                    <div>
                        <a title="Truyện tranh Vạn Giới Tiên Vương" href="http://www.nettruyen.com/truyen-tranh/van-gioi-tien-vuong-26694">
                            <img src="https://static.8cache.com/cover/o/eJzLyTDT17WITwqMNNQtNKp01A_zNXY1ifQuc8301HeEghwTR_1IV8PsTO-w4HKTUP1iAwC-dBAE/pham-nhan-tu-tien.jpg" className="comic-list-img" data-original="//st.truyenchon.com/data/comics/70/van-gioi-tien-vuong.jpg" alt="Truyện tranh Vạn Giới Tiên Vương" /><h4>Vạn Giới Tiên Vương</h4>
                        </a>
                        <div className="view clearfix">
                            <span className="pull-left">
                                <i className="fa fa-eye">
                                </i> 2.108.695 <i className="fa fa-comment" /> 219 <i className="fa fa-heart" />
            15.831</span>
                        </div>
                        <div>
                            <p>Chapter 18</p>
                            <p>Chapter 17</p>
                            <p>Chapter 16</p>
                        </div>
                    </div> 
                         
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    <StoryMBLeft/>
                    
                </section>
            </>
        );
    }
}

MainBetweenLeft.contextType = MyContext;
export default MainBetweenLeft;





