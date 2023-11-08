import {
  FETCH_ARTICLE_WITH_SLUG_REQUEST,
  FETCH_ARTICLE_WITH_SLUG_SUCCESS,
  FETCH_ARTICLE_WITH_SLUG_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  articleWithSlug: [],
  error: null,
};

const fetchArticleWithSlugReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_WITH_SLUG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARTICLE_WITH_SLUG_SUCCESS:
      return {
        ...state,
        loading: false,
        articleWithSlug: action.payload,
        error: null,
      };
    case FETCH_ARTICLE_WITH_SLUG_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default fetchArticleWithSlugReducer;
