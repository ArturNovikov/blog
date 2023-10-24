import React from 'react';

import heart from '../../assets/images/heart 1.svg';

import styles from './likeIcon.module.scss';

const LikeIcon = ({ /* slug, */ favoritesCount }) => {
  return (
    <div className={styles.articleMeta}>
      <img className={styles.articleLikes__heart} src={heart} alt="heart" />
      <span className={styles.articleLikes__count}>{favoritesCount}</span>
    </div>
  );
};

export default LikeIcon;
