import ApiService from '../../services/apiService';
import {
  FETCH_ARTICLE_WITH_SLUG_REQUEST,
  FETCH_ARTICLE_WITH_SLUG_SUCCESS,
  FETCH_ARTICLE_WITH_SLUG_ERROR,
} from '../actions/types';

export const fetchArticleWithSlugRequest = () => ({
  type: FETCH_ARTICLE_WITH_SLUG_REQUEST,
});

export const fetchArticleWithSlugSuccess = (data) => ({
  type: FETCH_ARTICLE_WITH_SLUG_SUCCESS,
  payload: data,
});

export const fetchArticleWithSlugError = (error) => ({
  type: FETCH_ARTICLE_WITH_SLUG_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const getArticleWithSlugAction = (slug) => async (dispatch) => {
  dispatch(fetchArticleWithSlugRequest());
  try {
    const data = await apiService.getAnArticle(slug);
    dispatch(fetchArticleWithSlugSuccess(data));
  } catch (error) {
    dispatch(fetchArticleWithSlugError(error.message));
    throw error;
  }
};
