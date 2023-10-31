import React, { useState } from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import { formatDate } from '../../utils/formatDate';
import truncateText from '../../utils/truncateText';
import cat from '../../assets/images/cat-solid.svg';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  const { username, image } = author;
  const [loading, setLoading] = useState(true);
  const isUserAuthorOnOwnPage = useSelector((state) => state.isUserAuthor.isUserAuthor);
  console.log('Article Header is User Author: ', isUserAuthorOnOwnPage);
  return (
    <div className={styles.articleAuthor}>
      <p className={styles.authorName}>{truncateText(username)}</p>
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
      {isUserAuthorOnOwnPage && (
        <>
          <button className={styles.btnDeleteArt}>Delete</button>
          <button className={styles.btnEditArt}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ArticleAuthor;
