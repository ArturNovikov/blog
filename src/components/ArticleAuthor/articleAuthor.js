import React from 'react';

import cat from '../../assets/images/cat-solid.svg';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  return (
    <div className={styles.articleAuthor}>
      <p className={styles.authorName}>{author}</p>
      <p className={styles.authorDate}>{date}</p>
      <img src={cat} alt="Author" className={styles.authorImage} />
    </div>
  );
};

export default ArticleAuthor;
