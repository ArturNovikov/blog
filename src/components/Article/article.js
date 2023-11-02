import React from 'react';

import ArticleHeader from '../ArticleHeader';
import ArticleTagList from '../ArticleTagList';
import ArticleContent from '../ArticleContent';
import ArticleAuthor from '../ArticleAuthor';

import styles from './article.module.scss';

const Article = ({ title, tags, author, date, slugKey, likes, description, favorited }) => {
  return (
    <article className={styles.article}>
      <ArticleHeader
        className={styles.articleHeader}
        title={title}
        slug={slugKey}
        likes={likes}
        author={author}
        favorited={favorited}
      />
      <ArticleTagList className={styles.articleTagList} tags={tags} />
      <ArticleContent className={styles.articleContent} description={description} />
      <ArticleAuthor className={styles.articleAuthor} author={author} date={date} />
    </article>
  );
};

export default Article;
