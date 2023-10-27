import { combineReducers } from 'redux';

import articleReducer from './articlesReducer';
import userRequestReducer from './userRequestReducer';
import isAuthorisedReducer from './isAuthorisedReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  userData: userRequestReducer,
  isAuthorised: isAuthorisedReducer,
});

export default rootReducer;
