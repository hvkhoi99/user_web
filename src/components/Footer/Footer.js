import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListCategories } from '../../actions/category';

class Footer extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const listCategories = this.props.categories.map((item, index) => {
            return (
                <li key={index}
                >
                    <a target="_self" href={`/category/${item.id}`}>{item.name}</a>
                </li>)
        });
        return (
            <div className="mainPart">
                <footer >
                    <div className="category-container">
                        <h4 >Thể loại</h4>
                        <ul className="category-list">
                            {listCategories}
                        </ul>
                    </div>
                </footer>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => {
            dispatch(getListCategories());
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)



