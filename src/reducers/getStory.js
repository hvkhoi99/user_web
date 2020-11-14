const storyInitialState = {}
const getStory = (state = storyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORY':
            state = action.story
            return { ...state }
        case 'GET_STORY_BY_CHAPTER_ID':
            state = action.story
            return { ...state }
        default:
            return state
    }
}

export default getStory;