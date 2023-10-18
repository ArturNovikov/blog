import { combineReducers } from 'redux';

import articleReducer from './articlesReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
});

export default rootReducer;
