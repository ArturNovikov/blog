import React, { useState } from 'react';
import { Spin } from 'antd';

import { formatDate } from '../../utils/formatDate';
import cat from '../../assets/images/cat-solid.svg';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  const { username, image } = author;
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.articleAuthor}>
      <p className={styles.authorName}>{username}</p>
      <p className={styles.authorDate}>{formatDate(date)}</p>
      {loading && <Spin className={styles.authorImage} />}
      <img
        style={loading ? { display: 'none' } : {}}
        src={image}
        onLoad={() => setLoading(false)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = cat;
          setLoading(false);
        }}
        alt="Author"
        className={styles.authorImage}
      />
    </div>
  );
};

export default ArticleAuthor;
