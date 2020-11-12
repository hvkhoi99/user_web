const InitialState = []
const authors = (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCH_AUTHORS':
            state = action.authors;
            return [...state];

        default:
            return state
    }
}

export default authors;