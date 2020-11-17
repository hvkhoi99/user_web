import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/image';

class PageImage extends Component {

    componentDidMount() {
        const { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getImages(id);
        }
    }


    render() {

        const listImage = this.props.images.map((item, index) => {
            return (
                <img src={item.path_image} alt="" className="read" key={index} />
            )
        })

        return (
            <div className="div-img-father">
                <div className="div-img">
                    {listImage}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getImages: (id) => {
            dispatch(getImages(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageImage)
