import React from 'react';

import styles from './articleTagList.scss';

const ArticleTagList = ({ tags }) => {
  return (
    <ul className={styles.articleTagList}>
      {tags.map((tag) => (
        <li key={tag} className={styles.articleTag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ArticleTagList;
