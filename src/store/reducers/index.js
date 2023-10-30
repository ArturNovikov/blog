import { combineReducers } from 'redux';

import articleReducer from './articlesReducer';
import userRequestReducer from './userRequestReducer';
import isAuthorisedReducer from './isAuthorisedReducer';
import loginReducer from './loginReducer';
import userUpdateReducer from './userUpdateReducer';
import setUserNameReducer from './setUserNameReducer';
import setUserImageReducer from './setUserImage';
import createArticleReducer from './createArticleReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  userData: userRequestReducer,
  isAuthorised: isAuthorisedReducer,
  login: loginReducer,
  userUpdate: userUpdateReducer,
  userName: setUserNameReducer,
  userImage: setUserImageReducer,
  createArticle: createArticleReducer,
});

export default rootReducer;
