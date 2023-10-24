import React from 'react';

import LikeIcon from '../LikeIcon/likeIcon';
import truncateText from '../../utils/truncateText';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title, slugKey, likes }) => {
  const maxLength = 50;
  return (
    <div className={styles.articleHeader}>
      <h2 className={styles.articleHeader__title}>{truncateText(title, maxLength)}</h2>
      <LikeIcon slug={slugKey} favoritesCount={likes} />
    </div>
  );
};

export default ArticleHeader;
