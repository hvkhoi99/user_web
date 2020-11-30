import callApi from '../utils/apiCaller';

export const getListStoriesRankMonth = (year, month, number) => {
    return dispatch => {
        return callApi(`chapter/year/${year}/month/${month}/limit/${number}`, 'GET', null).then(res => {
            dispatch(actGetStoriesRankMonth(res.data));
        }).catch(err =>{
            console.log(err.res)
        });
    };
}

export const getListStoriesRankWeek = (number) => {
    return dispatch => {
        return callApi(`chapters/week/limit/${number}`, 'GET', null).then(res => {
            dispatch(actGetStoriesRankWeek(res.data));
        }).catch(err =>{
            console.log(err.res)
        });
    };
}
export const getListStoriesRankDay = (number) => {
    return dispatch => {
        return callApi(`chapters/today/limit/${number}`, 'GET', null).then(res => {
            dispatch(actGetStoriesRankDay(res.data));
        }).catch(err =>{
            console.log(err.res)
        });
    };
}

export const actGetStoriesRankMonth = (stories) => {
    return {
        type: 'GET_STORIES_RANK_MONTH',
        stories
    }
}
export const actGetStoriesRankWeek = (stories) => {
    return {
        type: 'GET_STORIES_RANK_WEEK',
        stories
    }
}
export const actGetStoriesRankDay = (stories) => {
    return {
        type: 'GET_STORIES_RANK_DAY',
        stories
    }
}