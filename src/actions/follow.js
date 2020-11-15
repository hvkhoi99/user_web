import callApi from '../utils/apiCaller';

export const actFollowRequest = (story) => {
    return dispatch => {
        return callApi('follow', 'POST', story).then(res => {
            // dispatch(actFetchAuthors(res.data));
        });
    };
}

export const actGetStoriesFollowRequest = (user_id) => {
    return dispatch => {
        return callApi(`story/follow/${user_id}`, 'GET', null).then(res => {
            var dataStoriesFollow = res.data;
            dispatch(actGetStoriesFollow(dataStoriesFollow));
        });
    };
}

export const actGetStoriesFollow = (storiesFollow) => {
    return {
        type: 'GET_STORIES_FOLLOW',
        storiesFollow
    }
}