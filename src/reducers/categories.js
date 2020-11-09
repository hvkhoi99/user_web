const InitialState = []
const categories = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            state = action.categories
            return [...state]
        default:
            return state
    }
}

export default categories;