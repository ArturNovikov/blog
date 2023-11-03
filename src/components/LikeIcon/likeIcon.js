import React /* , { useEffect } */ from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLikeArticleAction } from '../../store/actionCreators/setLikeArticle';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';
import heart from '../../assets/images/heart 1.svg';
import redHeart from '../../assets/images/red-heart.svg';

import styles from './likeIcon.module.scss';

const LikeIcon = ({ slug, favoritesCount, favorited }) => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  const currentPage = useSelector((state) => state.articles.currentPage);
  // const createdStatus = useSelector((state) => state.createdStatus.createdStatus);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('Created status check! LIKE ICON!', createdStatus);
  //   /* dispatch(fetchArticles(currentPage)); */
  // }, [isAuthorised, createdStatus]);

  const handleLikeClick = () => {
    if (!isAuthorised) return;
    console.log('Is authorised? YES!');
    console.log('currentPage: ', currentPage);
    console.log('slug: ', slug);
    console.log('favoritesCount: ', favoritesCount);
    console.log('favorited: ', favorited);
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
