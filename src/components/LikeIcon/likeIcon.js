import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLikeArticleAction } from '../../store/actionCreators/setLikeArticle';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';
import heart from '../../assets/images/heart 1.svg';
import redHeart from '../../assets/images/red-heart.svg';

import styles from './likeIcon.module.scss';

const LikeIcon = ({ slug, favoritesCount, favorited }) => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (!isAuthorised) return;

    dispatch(setLikeArticleAction(slug))
      .then((response) => {
        dispatch(fetchArticles(currentPage));
        console.log('Right response: ', response);
      })
      .catch((error) => {
        console.error(error);
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
