import callApi from '../utils/apiCaller';

export const get_Category = (id) => {
    return dispatch => {
        return callApi(`category/${id}`, 'GET', null).then(res => {
            dispatch(actGetCategory(res.data));
        });
    };
}

export const actGetCategory = (category) => {
    return {
        type: 'GET_CATEGORY',
        category
    }
}