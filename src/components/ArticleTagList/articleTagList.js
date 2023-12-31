import React from 'react';

import truncateText from '../../utils/truncateText';

import styles from './articleTagList.module.scss';

const ArticleTagList = ({ tags, className }) => {
  const uniqueTags = [...new Set((tags || []).filter((tag) => tag !== ''))];
  return (
    <ul className={`${styles.articleTagList} ${className}`}>
      {uniqueTags.map((tag) => (
        <li key={tag} className={styles.articleTag}>
          {truncateText(tag)}
        </li>
      ))}
    </ul>
  );
};

export default ArticleTagList;
