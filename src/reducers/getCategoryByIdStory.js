const InitialState = []
const getCategorybyIdStory = (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_IDSTORY':
            state = action.categories
            return [...state]

        default:
            return state
    }
}

export default getCategorybyIdStory;