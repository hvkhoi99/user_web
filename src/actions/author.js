import callApi from '../utils/apiCaller';

export const actFetchAuthorsRequest = () => {
    return dispatch => {
        return callApi('authors', 'GET', null).then(res => {
            var dataAuthorGet = res.data;
            dispatch(actFetchAuthors(dataAuthorGet));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actFetchAuthors = (authors) => {
    return {
        type: 'FETCH_AUTHORS',
        authors
    }
}

export const actGetAuthorById = (id) => {
    return dispatch => {
        return callApi(`author/${id}`, 'GET', null).then(res => {
            dispatch(actGetAuthor(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}

export const actGetAuthor = (author) => {
    return {
        type: 'GET_AUTHOR_BY_ID',
        author
    }
}

export const actGetAuthorByStoryId = (author) => {
    return {
        type: 'GET_AUTHOR_BY_STORY_ID',
        author
    }
}

export const actGetAuthorByStoryIdRequest = (id) => {
    return dispatch => {
        return callApi(`author/story/${id}`, 'GET', null).then(res => {
            dispatch(actGetAuthorByStoryId(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}