const getCategoryInitialState = {}
const getCategory = (state = getCategoryInitialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY':
            state = action.category
            return { ...state }
        default:
            return { ...state }
    }
}

export default getCategory;