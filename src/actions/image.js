import callApi from '../utils/apiCaller';

export const getImages = (id) => {
    return dispatch => {
        return callApi(`images/chapter/${id}`, 'GET', null).then(res => {
            dispatch(actGetImage(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetImage = (images) => {
    return {
        type: 'GET_IMAGES',
        images
    }
}