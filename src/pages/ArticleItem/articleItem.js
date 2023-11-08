import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

import Article from '../../components/Article';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';
import { setCreatedStatus } from '../../store/actionCreators/setCreatedStatus';
import { getArticleWithSlugAction } from '../../store/actionCreators/fetchArticleWithSlug';

import style from './articleItem.module.scss';

const ArticleItem = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.articles.currentPage);
  const created = useSelector((state) => state.createdStatus.createdStatus);
  const articleWithSlugGet = useSelector((state) => state.articleWithSlug.articleWithSlug);
  const { slug } = useParams();
  const articlesArray = useSelector((state) =>
    created ? state.createArticle.data : state.articles.data.articles || []
  );

  const articleFromSlugGet = articleWithSlugGet.article;

  let article =
    articlesArray && articlesArray.length > 0
      ? created
        ? articlesArray
        : articlesArray.find((article) => article.slug === slug)
      : null;

  useEffect(() => {
    if (!article || !articlesArray || articlesArray.length === 0) {
      dispatch(getArticleWithSlugAction(slug));
    }

    if (!articlesArray || articlesArray.length === 0) {
      dispatch(fetchArticles(currentPage));
    }

    dispatch(setCreatedStatus(false));
  }, [articlesArray.length, article]);

  if (!article && articleFromSlugGet) {
    article = articleFromSlugGet;
  }

  if (!article) {
    return <Spin />;
  } else {
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
  }
};

export default ArticleItem;
