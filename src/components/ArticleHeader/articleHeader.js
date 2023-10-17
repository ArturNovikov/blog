import React from 'react';

import LikeIcon from '../LikeIcon/likeIcon';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title }) => {
  return (
    <div className={styles.articleHeader}>
      <h2 className={styles.articleHeader__title}>{title}</h2>
      <LikeIcon />
    </div>
  );
};

export default ArticleHeader;
