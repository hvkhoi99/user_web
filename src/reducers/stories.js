
const storiesInitialState = []
const stories = (state = storiesInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES':
            state = action.stories;
            return [...state]
        case 'SEARCH_STORIES':
            state = action.stories;
            return [...state]
        case 'FETCH_STORIES':
            state = action.stories;
            return [...state]
        default:
            return state
    }
}

export default stories;