import callApi from '../utils/apiCaller';

export const actGetStory = (id) => {
    return dispatch => {
        return callApi(`story/${id}`, 'GET', null).then(res => {
            dispatch(actGet(res.data));

        }).catch(error=>{
            console.log(error)
        });
    };
}

export const actGet = (story) => {
    return {
        type: 'GET_STORY',
        story
    }
}

export const actGetStoryByChapterIdRequest = (id) => {
    return dispatch => {
        return callApi(`story/chapter/${id}`, 'GET', null).then(res => {
            dispatch(actGetStoryByChapterId(res.data));
        }).catch(error=>{
            console.log(error)
        });
    };
}

export const actGetStoryByChapterId = (story) => {
    return {
        type: 'GET_STORY_BY_CHAPTER_ID',
        story
    }
}