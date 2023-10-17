import React from 'react';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  return (
    <div className={styles.articleAuthor}>
      <img src="/path-to-author-image.jpg" alt="Author" className={styles.authorImage} />
      <div>
        <p className={styles.authorName}>{author}</p>
        <p className={styles.authorDate}>{date}</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
