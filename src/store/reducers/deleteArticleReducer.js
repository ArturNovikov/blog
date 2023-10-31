import {
  FETCH_DELETE_ARTICLE_REQUEST,
  FETCH_DELETE_ARTICLE_SUCCESS,
  FETCH_DELETE_ARTICLE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  deleteDate: [],
  error: null,
};

const deleteArticleReducer = (state = initialState, action) => {
  switch (action.payload) {
    case FETCH_DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteData: action.payload,
        error: null,
      };
    case FETCH_DELETE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteArticleReducer;
