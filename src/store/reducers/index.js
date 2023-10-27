import { combineReducers } from 'redux';

import articleReducer from './articlesReducer';
import userRequestReducer from './userRequestReducer';
import isAuthorisedReducer from './isAuthorisedReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  userData: userRequestReducer,
  isAuthorised: isAuthorisedReducer,
  login: loginReducer,
});

export default rootReducer;
