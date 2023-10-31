import { SET_IS_USER_AUTHOR } from '../actions/types';

const initialState = {
  isUserAuthor: false,
};

const setIsUserAuthorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_USER_AUTHOR:
      return {
        ...state,
        isUserAuthor: action.payload,
      };
    default:
      return state;
  }
};

export default setIsUserAuthorReducer;
