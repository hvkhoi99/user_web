import callApi from '../utils/apiCaller';

export const getListChapters = (id) => {
    return dispatch => {
        return callApi(`story/${id}/chapters`, 'GET', null).then(res => {
            dispatch(actGetListChapters(res.data));
        });
    };
}

export const actGetListChapters = (chapters) => {
    return {
        type: 'GET_CHAPTERS',
        chapters
    }
}

