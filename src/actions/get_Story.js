import callApi from '../utils/apiCaller';

export const actGetStory = (id) => {
    return dispatch => {
        return callApi(`story/${id}`, 'GET', null).then(res => {
            dispatch(actGet(res.data));

        });
    };
}

export const actGet = (story) => {
    return {
        type: 'GET_STORY',
        story
    }
}