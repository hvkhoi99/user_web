import callApi from '../utils/apiCaller';

export const getListStories = () => {
    return dispatch => {
        return callApi('stories', 'GET', null).then(res => {
            dispatch(actGetStories(res.data));
        });
    };
}

export const actGetStories = (stories) => {
    return {
        type: 'GET_STORIES',
        stories
    }
}