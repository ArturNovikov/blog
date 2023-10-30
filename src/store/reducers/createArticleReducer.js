import {
  FETCH_CREATE_ARTICLE_REQUEST,
  FETCH_CREATE_ARTICLE_SUCCESS,
  FETCH_CREATE_ARTICLE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const createArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_CREATE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createArticleReducer;
