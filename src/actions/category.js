import callApi from '../utils/apiCaller';

export const getListCategories = () => {
    return dispatch => {
        return callApi('categories', 'GET', null).then(res => {
            const dataCate = res.data;
            dispatch(actGetCategories(dataCate));
        });
    };
}

export const actGetCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES',
        categories
    }
}