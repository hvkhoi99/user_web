import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actFetchStoryCategoriesRequest } from '../../actions/category_stories';
import { get_Category } from '../../actions/get_category';
import StoryMBLeft from '../Story/StoryMBLeft';
import MainBetweenRight from '../Main/MainBetweenRight'
import Phantrang from '../Phantrang';
import { getListChapters } from '../../actions/chapters';

class Stories extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStoriesbyCategory(id);
            this.props.getCategoryById(id);
        }
    }

    render() {

        const listStories = this.props.categoryStories.map((story, index) => {
            return (<StoryMBLeft key={index} story={story} />)
        })


        return (
            <>
                <div className="mainPart">
                    <div className="comic-list-container">
                        <section className="left-side-item">
                            <div className="introduction-item">
                                <h3 className="page-title">Thể Loại <i className="fa fa-angle-right" /> {this.props.getCategory.name}</h3>
                            </div>
                            {listStories}
                        </section>
                        <MainBetweenRight />
                    </div>
                    <Phantrang />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoryStories: state.categoryStories,
        categories: state.categories,
        getCategory: state.getCategory,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesbyCategory: (id) => {
            dispatch(actFetchStoryCategoriesRequest(id))
        },
        getCategoryById: (id) => {
            dispatch(get_Category(id))
        },

        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
