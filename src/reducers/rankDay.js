const InitialState = []
const storiesRankDay = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANK_DAY':
            state = action.stories
            return [...state]
        default:
            return state
    }
}

export default storiesRankDay;