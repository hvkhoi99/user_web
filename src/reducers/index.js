import { combineReducers } from 'redux';
import categories from './categories'
import stories from './stories'
import categoryStories from './categoryStories'
import getCategory from './getCategory'
import getStory from './getStory'
import getCategorybyIdStory from './getCategoryByIdStory'
import authors from './authors'
import author from './getAuthorById'
import truyendecu from './truyendecu'
import chapters from './chapters'
import images from './images'




const appReducers = combineReducers({
    categories,
    stories,
    categoryStories,
    getCategory,
    getStory,
    getCategorybyIdStory,
    authors,
    author,
    truyendecu,
    chapters,
    images
    
})

export default appReducers;