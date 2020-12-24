import callApi from '../utils/apiCaller';

export const getListChapters = (id) => {
    return dispatch => {
        return callApi(`story/${id}/chapters`, 'GET', null).then(res => {
            var resData = res.data;
            dispatch(actGetListChapters(resData));
        }).catch(error=>{
            console.log(error)
        });
    };
}

export const actGetListChapters = (chapters) => {
    return {
        type: 'GET_CHAPTERS',
        chapters
    }
}

export const getChapterByIdRequest = (id) => {
    return dispatch => {
        return callApi(`chapter/${id}`, 'GET', null).then(res => {
            dispatch(getChapterById(res.data));
        }).catch(error=>{
            console.log(error)
        });
    };
}

export const getChapterById = (chapter) => {
    return {
        type: 'CHAPTER_GETTING',
        chapter
    }
}

