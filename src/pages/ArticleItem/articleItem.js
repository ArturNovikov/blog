import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

import Article from '../../components/Article';

import style from './articleItem.module.scss';

const ArticleItem = ({ created }) => {
  const { slug } = useParams();

  const loading = useSelector((state) => (created ? state.createArticle.loading : state.articles.loading));
  const articlesArray = useSelector((state) => (created ? state.createArticle.data : state.articles.data.articles));
  console.log('articlesArray: ', articlesArray);

  if (loading) {
    return <Spin />;
  }

  const article = created ? articlesArray : articlesArray.find((article) => article.slug === slug);

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
