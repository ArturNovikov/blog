import ApiService from '../../services/apiService';
import {
  FETCH_CREATE_ARTICLE_REQUEST,
  FETCH_CREATE_ARTICLE_SUCCESS,
  FETCH_CREATE_ARTICLE_ERROR,
} from '../actions/types';

export const fetchCreateArticleRequest = () => ({
  type: FETCH_CREATE_ARTICLE_REQUEST,
});

export const fetchCreateArticleSuccess = (data) => ({
  type: FETCH_CREATE_ARTICLE_SUCCESS,
  payload: data,
});

export const fetchCreateArticleError = (error) => ({
  type: FETCH_CREATE_ARTICLE_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const postArticle = (articleData) => async (dispatch) => {
  dispatch(fetchCreateArticleRequest());
  try {
    const response = await apiService.postNewArticle(articleData);
    dispatch(fetchCreateArticleSuccess(response.article));
    return response;
  } catch (error) {
    dispatch(fetchCreateArticleError(error.message));
    throw error;
  }
};
