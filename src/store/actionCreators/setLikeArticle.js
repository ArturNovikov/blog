import ApiService from '../../services/apiService';
import { SET_LIKE_ARTICLE } from '../../store/actions/types';

export const setLikeArticle = (data) => ({
  type: SET_LIKE_ARTICLE,
  payload: data,
});

const apiService = new ApiService();

export const setLikeArticleAction = (slug) => async (dispatch) => {
  try {
    const response = await apiService.toggleFavoriteArticle(slug);
    dispatch(setLikeArticle(response.article.favorited));
    return response.article.favorited;
  } catch (error) {
    console.error('Error dispatching like: ', error);
  }
};
