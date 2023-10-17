import React from 'react';

import ArticleHeader from '../ArticleHeader';
import ArticleTagList from '../ArticleTagList';
import ArticleContent from '../ArticleContent';
import ArticleAuthor from '../ArticleAuthor';

import styles from './article.module.scss';

const Article = ({ title, tags, author, date }) => {
  return (
    <article className={styles.article}>
      <ArticleHeader title={title} />
      <ArticleTagList tags={tags} />
      <ArticleContent />
      <ArticleAuthor author={author} date={date} />
    </article>
  );
};

export default Article;
