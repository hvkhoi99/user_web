const InitialState = {}
const  chapterDetail = (state = InitialState, action) => {
    switch (action.type) {

        case 'CHAPTER_GETTING':
            state = action.chapter;
            return {...state}
        
        default:
            return state
    }
}

export default chapterDetail;