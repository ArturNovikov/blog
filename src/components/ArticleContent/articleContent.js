import React from 'react';

import styles from './articleContent.module.scss';

const ArticleContent = ({ className, body, description }) => {
  console.log(body);
  return (
    <>
      <p className={`${styles.articleContent} ${className}`}>{description}</p>
    </>
  );
};

export default ArticleContent;
