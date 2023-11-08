import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLikeArticleAction } from '../../store/actionCreators/setLikeArticle';
import { fetchArticles, fetchArticlesGloballyError } from '../../store/actionCreators/fetchArticleGlobally';
import heart from '../../assets/images/heart 1.svg';
import redHeart from '../../assets/images/red-heart.svg';
import { getArticleWithSlugAction } from '../../store/actionCreators/fetchArticleWithSlug';

import styles from './likeIcon.module.scss';

const LikeIcon = ({ slug, favoritesCount, favorited }) => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const createdStatus = useSelector((state) => state.createdStatus.createdStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(currentPage));
  }, [isAuthorised, createdStatus]);

  const handleLikeClick = () => {
    dispatch(getArticleWithSlugAction(slug));
    if (!isAuthorised) return;
    dispatch(setLikeArticleAction(slug))
      .then(() => {
        dispatch(fetchArticles(currentPage));
      })
      .catch((error) => {
        dispatch(fetchArticlesGloballyError(error));
      });
  };

  const imageSrc = favorited ? redHeart : heart;

  return (
    <div className={styles.articleMeta}>
      <img
        className={styles.articleLikes__heart}
        src={imageSrc}
        alt="heart"
        onClick={handleLikeClick}
        style={{ cursor: isAuthorised ? 'pointer' : 'default' }}
      />
      <span className={styles.articleLikes__count}>{favoritesCount}</span>
    </div>
  );
};

export default LikeIcon;
