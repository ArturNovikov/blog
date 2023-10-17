import React from 'react';

import styles from './articleTagList.module.scss';

const ArticleTagList = ({ tags, className }) => {
  return (
    <ul className={`${styles.articleTagList} ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className={styles.articleTag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ArticleTagList;
