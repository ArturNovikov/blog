import React from 'react';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title }) => {
  return (
    <div className={styles.articleHeader}>
      <h2 className={styles.articleHeader__title}>{title}</h2>
      <div className={styles.articleMeta}>
        <span className={styles.articleLikes}>12</span>
      </div>
    </div>
  );
};

export default ArticleHeader;
