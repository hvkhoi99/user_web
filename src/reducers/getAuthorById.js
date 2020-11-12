const InitialState = {}
const author = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_AUTHOR_BY_ID':
            state = action.author;
            return { ...state }

        default:
            return state
    }
}

export default author;