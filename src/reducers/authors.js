const InitialState = []
const authors = (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCH_AUTHORS':
            state = action.authors;
            return [...state];

        // case 'GET_AUTHOR_BY_STORY_ID':
        //     state = action.author;
        //     return { ...state }
        default:
            return state
    }
}

export default authors;