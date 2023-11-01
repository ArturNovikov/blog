import { FETCH_EDIT_ARTICLE_REQUEST, FETCH_EDIT_ARTICLE_SUCCESS, FETCH_EDIT_ARTICLE_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  editArticleData: [],
  error: null,
};

const editArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDIT_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_EDIT_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};

export default editArticleReducer;
