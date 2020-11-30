const InitialState = []
const storiesRankMonth = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANK_MONTH':
            state = action.stories
            return [...state]
        
        default:
            return state
    }
}

export default storiesRankMonth;