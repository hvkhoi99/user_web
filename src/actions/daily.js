import callApi from '../utils/apiCaller';

export const getListStoriesMonday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesMonday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesMonday = (stories) => {
    return {
        type: 'GET_STORIES_MONDAY',
        stories
    }
}
export const getListStoriesTuesday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesTuesday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesTuesday = (stories) => {
    return {
        type: 'GET_STORIES_TUESDAY',
        stories
    }
}
export const getListStoriesWednesday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesWednesday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}



export const actGetStoriesWednesday = (stories) => {
    return {
        type: 'GET_STORIES_WEDNESDAY',
        stories
    }
}

export const getListStoriesThursday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesThursday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesThursday = (stories) => {
    return {
        type: 'GET_STORIES_THURSDAY',
        stories
    }
}

export const getListStoriesFriday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesFriday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesFriday = (stories) => {
    return {
        type: 'GET_STORIES_FRIDAY',
        stories
    }
}

export const getListStoriesSaturday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesSaturday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesSaturday = (stories) => {
    return {
        type: 'GET_STORIES_SATURDAY',
        stories
    }
}

export const getListStoriesSunday = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesSunday(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}


export const actGetStoriesSunday = (stories) => {
    return {
        type: 'GET_STORIES_SUNDAY',
        stories
    }
}