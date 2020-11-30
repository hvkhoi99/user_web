const InitialState = []
const storiesRankWeek = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANK_WEEK':
            state = action.stories
            return [...state]
        default:
            return state
    }
}

export default storiesRankWeek;