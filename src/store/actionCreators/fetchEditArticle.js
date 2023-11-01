import ApiService from '../../services/apiService';
import { FETCH_EDIT_ARTICLE_REQUEST, FETCH_EDIT_ARTICLE_SUCCESS, FETCH_EDIT_ARTICLE_ERROR } from '../actions/types';

export const fetchEditArticleRequest = () => ({
  type: FETCH_EDIT_ARTICLE_REQUEST,
});

export const fetchEditArticleSuccess = (data) => ({
  type: FETCH_EDIT_ARTICLE_SUCCESS,
  payload: data,
});

export const fetchEditArticleError = (error) => ({
  type: FETCH_EDIT_ARTICLE_ERROR,
  data: error,
});

const apiService = new ApiService();

export const editArticleAction = (editArticleData, slug) => async (dispatch) => {
  dispatch(fetchEditArticleRequest());
  try {
    const response = await apiService.updateAnArticle(editArticleData, slug);
    dispatch(fetchEditArticleSuccess(response));
    return response;
  } catch (error) {
    dispatch(fetchEditArticleError());
    throw error;
  }
};
