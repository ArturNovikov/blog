import React from 'react';
import { Link } from 'react-router-dom';

import LikeIcon from '../LikeIcon/likeIcon';
import truncateText from '../../utils/truncateText';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title, slug, likes }) => {
  const maxLength = 50;
  return (
    <div className={styles.articleHeader}>
      <Link to={`/articles/${slug}`}>
        <h2 className={styles.articleHeader__title}>{truncateText(title, maxLength)}</h2>
      </Link>
      <LikeIcon slug={slug} favoritesCount={likes} />
    </div>
  );
};

export default ArticleHeader;
