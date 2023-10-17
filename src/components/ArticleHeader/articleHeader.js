import React from 'react';

import styles from './articleHeader.scss';

const ArticleHeader = ({ title }) => {
  return (
    <div className={styles.articleHeader}>
      <h2>{title}</h2>
      <div className={styles.articleMeta}>
        <span className={styles.articleLikes}>12</span>
      </div>
    </div>
  );
};

export default ArticleHeader;
