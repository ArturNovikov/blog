import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Article from '../../components/Article';

import style from './articleItem.module.scss';

const ArticleItem = () => {
  const slugID = 'article-1eh4k9';

  const loading = useSelector((state) => state.articles.loading);
  const articlesArray = useSelector((state) => state.articles.data.articles);

  if (loading) {
    return <Spin />;
  }

  const article = articlesArray ? articlesArray.find((article) => article.slug === slugID) : null;

  if (!article) {
    return <h1>Статья не найдена!</h1>;
  }
  return (
    <>
      <Article
        title={article.title}
        tags={article.tagList}
        author={article.author}
        date={article.createdAt}
        slugKey={article.slug}
        likes={article.favoritesCount}
        description={article.description}
      />
      <article className={style.articleBody}>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </article>
    </>
  );
};

export default ArticleItem;
