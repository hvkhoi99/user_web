import { combineReducers } from 'redux';
import categories from './categories'
import stories from './stories'


const appReducers = combineReducers({
    categories,
    stories
})

export default appReducers;