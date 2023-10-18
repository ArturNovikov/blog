import ApiService from '../../services/apiService';
import {
  FETCH_ARTICLES_GLOBALLY_REQUEST,
  FETCH_ARTICLES_GLOBALLY_SUCCESS,
  FETCH_ARTICLES_GLOBALLY_ERROR,
} from '../actions/types';

export const fetchArticlesGloballyRequest = () => ({
  type: FETCH_ARTICLES_GLOBALLY_REQUEST,
});

export const fetchArticlesGloballySuccess = (data) => ({
  type: FETCH_ARTICLES_GLOBALLY_SUCCESS,
  payload: data,
});

export const fetchArticlesGloballyError = (error) => ({
  type: FETCH_ARTICLES_GLOBALLY_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const fetchArticles = () => async (dispatch) => {
  dispatch(fetchArticlesGloballyRequest());
  try {
    const data = await apiService.getGlobalArticles();
    dispatch(fetchArticlesGloballySuccess(data));
  } catch (error) {
    dispatch(fetchArticlesGloballyError(error.message));
  }
};
