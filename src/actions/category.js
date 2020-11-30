import callApi from '../utils/apiCaller';

export const getListCategories = () => {
    return dispatch => {
        return callApi('categories', 'GET', null).then(res => {
            dispatch(actGetCategories(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES',
        categories
    }
}