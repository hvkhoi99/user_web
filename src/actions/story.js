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

export const getTruyenDCRequest = (number) => {
    return dispatch => {
        return callApi(`story/many-view/${number}`, 'GET', null).then(res => {
            dispatch(actGetTruyenDC(res.data));
        });
    };
}


export const actGetTruyenDC = (stories) => {
    return {
        type: 'GET_TRUYEN_DC',
        stories
    }
}

export const getListStoriesByIdStory = (id) => {
    return dispatch => {
        return callApi(`story/${id}`, 'GET', null).then(res =>{
            dispatch(actGetStories(res.data));
        })
    }
}


export const actSearchStoriesRequest = (name) => {
    return dispatch => {
        return callApi(`story/search/${name}`, 'GET', null).then(res => {
            dispatch(actSearchStories(res.data));
        });
    };
}

export const actSearchStories = (stories) => {
    return {
        type: 'SEARCH_STORIES',
        stories
    }
}