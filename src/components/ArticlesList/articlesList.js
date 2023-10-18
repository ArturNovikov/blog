import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, ConfigProvider } from 'antd';

import { fetchArticles, setCurrentPage } from '../../store/actionCreators/fetchArticleGlobally';
import Article from '../Article/article';

import styles from './articlesList.module.scss';

const configSettings = {
  theme: {
    token: {
      colorPrimary: 'white',
    },
    components: {
      Pagination: {
        itemActiveBg: '#1890FF',
      },
    },
  },
};

const ArticlesList = ({ className }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.articles.loading);
  const data = useSelector((state) => state.articles.data);
  const error = useSelector((state) => state.articles.error);
  const currentPage = useSelector((state) => state.articles.currentPage);

  useEffect(() => {
    dispatch(fetchArticles(currentPage));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <section className={`${styles.articlesList} ${className}`}>
      {data &&
        data.articles &&
        Array.isArray(data.articles) &&
        data.articles.map((article) => (
          <Article
            key={article.slug}
            title={article.title}
            tags={article.tagList}
            author={article.author}
            date={article.createdAt}
          />
        ))}
      <ConfigProvider {...configSettings}>
        <Pagination
          className={styles.pagination}
          defaultCurrent={1}
          current={currentPage}
          onChange={handlePageChange}
          pageSize={5}
          total={data.articlesCount}
          hideOnSinglePage={true}
          showSizeChanger={false}
        />
      </ConfigProvider>
    </section>
  );
};

export default ArticlesList;
