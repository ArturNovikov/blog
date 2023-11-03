import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

import Article from '../../components/Article';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';
import { setCreatedStatus } from '../../store/actionCreators/setCreatedStatus';

import style from './articleItem.module.scss';

const ArticleItem = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.articles.currentPage);
  const created = useSelector((state) => state.createdStatus.createdStatus);
  const { slug } = useParams();
  const articlesArray = useSelector((state) => (created ? state.createArticle.data : state.articles.data.articles));

  const article = created ? articlesArray : articlesArray.find((article) => article.slug === slug);

  useEffect(() => {
    dispatch(fetchArticles(currentPage));
    dispatch(setCreatedStatus(false));
    console.log('createdStatus from article ITEM: ', created);
    console.log('articlesArray from article ITEM: ', articlesArray);
    console.log('article from article ITEM: ', article);
  }, [created]);

  if (!article) {
    return (
      <>
        <Spin />
        <h1>Статья не найдена!</h1>
      </>
    );
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
        favorited={article.favorited}
      />
      <article className={style.articleBody}>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </article>
    </>
  );
};

export default ArticleItem;
