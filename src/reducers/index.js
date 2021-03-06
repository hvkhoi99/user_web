import { combineReducers } from 'redux';
import author from './author';
import authors from './authors';
import categories from './categories';
import categoryStories from './categoryStories';
import chapters from './chapters';
import checkLogin from './checkLogin';
import getCategory from './getCategory';
import getCategorybyIdStory from './getCategoryByIdStory';
import getStoriesFollow from './getStoriesFollow';
import getStory from './getStory';
import history from './history';
import images from './images';
import stories from './stories';
import storiesSuggest from './storiesSuggest';
import truyendecu from './truyendecu';
import userCurrent from './userCurrent';
import chapterDetail from './chapterDetail';
import comments from './comments';

import storiesRankMonth from './rankMonth'
import storiesRankWeek from './rankWeek'
import storiesRankDay from './rankDay'
import dailyStories from './dailyStories'



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
    images,
    storiesSuggest,
    checkLogin,
    getStoriesFollow,
    history,
    userCurrent,
    chapterDetail,
    comments,
    storiesRankMonth,
    storiesRankWeek,
    storiesRankDay,
    dailyStories
})

export default appReducers;