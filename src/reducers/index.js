import { combineReducers } from 'redux';
import categories from './categories'
import stories from './stories'
import categoryStories from './categoryStories'
import getCategory from './getCategory'
import getStory from './getStory'
import getCategorybyIdStory from './getCategoryByIdStory'
import authors from './authors'


const appReducers = combineReducers({
    categories,
    stories,
    categoryStories,
    getCategory,
    getStory,
    getCategorybyIdStory,
    authors
})

export default appReducers;