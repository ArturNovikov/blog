import React from 'react';

import { formatDate } from '../../utils/formatDate';
import cat from '../../assets/images/cat-solid.svg';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  const { username, image } = author;
  return (
    <div className={styles.articleAuthor}>
      <p className={styles.authorName}>{username}</p>
      <p className={styles.authorDate}>{formatDate(date)}</p>
      <img src={image ? image : cat} alt="Author" className={styles.authorImage} />
    </div>
  );
};

export default ArticleAuthor;
