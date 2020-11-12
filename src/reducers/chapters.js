const InitialState = []
const chapters = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_CHAPTERS':
            state = action.chapters
            return [...state]
        
        
        default:
            return state
    }
}

export default chapters;