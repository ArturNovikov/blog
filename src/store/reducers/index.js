import { combineReducers } from 'redux';

import articleReducer from './articlesReducer';
import userRequestReducer from './userRequestReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  userData: userRequestReducer,
});

export default rootReducer;
