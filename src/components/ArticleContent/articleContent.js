import React from 'react';

import styles from './articleContent.module.scss';

const ArticleContent = ({ className, description }) => {
  return (
    <>
      <p className={`${styles.articleContent} ${className}`}>{description}</p>
    </>
  );
};

export default ArticleContent;
