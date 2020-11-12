const InitialState = []
const truyendecu = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_TRUYEN_DC':
            state = action.stories
            return [...state]
        
        default:
            return state
    }
}

export default truyendecu;