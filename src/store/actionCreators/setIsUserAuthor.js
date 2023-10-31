import { SET_IS_USER_AUTHOR } from '../actions/types';

export const setIsUserAuthor = (isAuthor) => {
  return {
    type: SET_IS_USER_AUTHOR,
    payload: isAuthor,
  };
};
