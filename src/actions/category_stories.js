import callApi from '../utils/apiCaller';

export const actFetchStoryCategoriesRequest = (id) => {
    return dispatch => {
        return callApi(`story/category/${id}`, 'GET', null).then(res => {
            dispatch(actFetchStoryCategories(res.data));
        });
    };
}

export const actFetchStoryCategories = (stories) => {
    return {
        type : 'FETCH_CATEGORY_STORIES',
        stories
    }
}

export const actFetchCategoriesRequest = (id) => {
    return dispatch => {
        return callApi(`categories/story/${id}`, 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data));
        });
    };
}

export const actFetchCategories = (categories) => {
    return {
        type : 'FETCH_CATEGORY_IDSTORY',
        categories
    }
}