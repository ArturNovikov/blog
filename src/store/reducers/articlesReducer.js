import {
  FETCH_ARTICLES_GLOBALLY_REQUEST,
  FETCH_ARTICLES_GLOBALLY_SUCCESS,
  FETCH_ARTICLES_GLOBALLY_ERROR,
  SET_CURRENT_PAGE,
} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
  currentPage: 1,
  totalArticles: 0,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_GLOBALLY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARTICLES_GLOBALLY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_ARTICLES_GLOBALLY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
