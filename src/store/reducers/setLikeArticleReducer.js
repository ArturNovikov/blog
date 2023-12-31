import { SET_LIKE_ARTICLE } from '../../store/actions/types';

const initialState = {
  favorited: false,
};

const setLikeArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_ARTICLE:
      return {
        ...state,
        favorited: action.payload,
      };
    default:
      return state;
  }
};

export default setLikeArticleReducer;
