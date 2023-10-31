import ApiService from '../../services/apiService';
import {
  FETCH_DELETE_ARTICLE_REQUEST,
  FETCH_DELETE_ARTICLE_SUCCESS,
  FETCH_DELETE_ARTICLE_ERROR,
} from '../actions/types';

export const fetchDeleteArticleRequest = () => ({
  type: FETCH_DELETE_ARTICLE_REQUEST,
});

export const fetchDeleteArticleSuccess = (data) => ({
  type: FETCH_DELETE_ARTICLE_SUCCESS,
  payload: data,
});

export const fetchDeleteArticleError = (error) => ({
  type: FETCH_DELETE_ARTICLE_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const deleteArticleAction = (deleteData) => async (dispatch) => {
  dispatch(fetchDeleteArticleRequest());
  try {
    const response = await apiService.deleteArticle(deleteData);
    dispatch(fetchDeleteArticleSuccess(response || true));
    return response || true;
  } catch (error) {
    dispatch(fetchDeleteArticleError());
    throw error;
  }
};
