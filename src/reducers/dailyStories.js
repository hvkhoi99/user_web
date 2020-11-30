const dailyStoriesInitialState = []
const dailyStories = (state = dailyStoriesInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_MONDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_TUESDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_WEDNESDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_THURSDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_FRIDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_SATURDAY':
            state = action.stories
            return [...state]
        case 'GET_STORIES_SUNDAY':
            state = action.stories
            return [...state]
        default:
            return state
    }
}

export default dailyStories;