const getCategoryInitialState = []
const getStoriesFollow = (state = getCategoryInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_FOLLOW':
            state = action.storiesFollow
            return [...state]
        default:
            return [...state]
    }
}

export default getStoriesFollow;