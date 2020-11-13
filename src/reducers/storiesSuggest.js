const InitialState = []
const storiesSuggest = (state = InitialState, action) => {
    switch (action.type) {
        case 'SEARCH_STORIES':
            state = action.stories;
            return [...state]
        
        default:
            return state
    }
}
export default storiesSuggest;