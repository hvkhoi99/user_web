const InitialState = []
const truyendecu = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_TRUYEN_HOT':
            state = action.stories
            return [...state]
        
        default:
            return state
    }
}

export default truyendecu;