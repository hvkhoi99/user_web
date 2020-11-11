const InitialState = []
const categoryStories  = (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_STORIES':
            state = action.stories;
            return [...state]
            
        default:
            return state
    }
}

export default categoryStories;