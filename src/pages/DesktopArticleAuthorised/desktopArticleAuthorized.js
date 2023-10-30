import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ArticleItem from '../ArticleItem';

const DesktopArticleAuthorized = () => {
  const created = true;
  const articleFromRedux = useSelector((state) => state.createArticle);
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);

  useEffect(() => {
    console.log('DesktopArticleAuthorized render!');
    console.log('DesktopArticleAuthorized articleFromRedux: ', articleFromRedux, isAuthorised);
  }, [articleFromRedux, isAuthorised]);

  return <ArticleItem created={created} />;
};

export default DesktopArticleAuthorized;
