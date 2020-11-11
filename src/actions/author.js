import callApi from '../utils/apiCaller';

export const actFetchAuthorsRequest = () => {
    return dispatch => {
        return callApi('authors', 'GET', null).then(res => {
            dispatch(actFetchAuthors(res.data));
        });
    };
}

export const actFetchAuthors = (authors) => {
    return {
        type: 'FETCH_AUTHORS',
        authors
    }
}

// export const actGetAuthorByStoryId = (author) => {
//     return {
//         type: 'GET_AUTHOR_BY_STORY_ID',
//         author
//     }
// }

// export const actGetAuthorByStoryIdRequest = (id) => {
//     return dispatch => {
//         return callApi(`author/story/${id}`, 'GET', null).then(res => {
//             dispatch(actGetAuthorByStoryId(res.data));
//         });
//     };
// }