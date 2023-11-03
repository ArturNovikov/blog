import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, ConfigProvider, Spin, Modal } from 'antd';

import { fetchArticles, setCurrentPage } from '../../store/actionCreators/fetchArticleGlobally';
import Article from '../Article/article';
import configSettings from '../../utils/configSettings';

import styles from './articlesList.module.scss';

const ArticlesList = ({ className }) => {
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.articles.data);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const isFavorited = useSelector((state) => state.likeArticle.favorited);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    console.log(
      'Data from article List: ',
      data && data.articles && Array.isArray(data.articles) && data.articles.map((article) => article.author.username)
    );
  }, [data]);

  useEffect(() => {
    if (!paginationLoading) {
      dispatch(fetchArticles(currentPage));
    }
  }, [currentPage, isFavorited]);

  const handlePageChange = (pageNumber) => {
    setPaginationLoading(true);
    dispatch(setCurrentPage(pageNumber));
    dispatch(fetchArticles(pageNumber)).finally(() => {
      setPaginationLoading(false);
    });
  };

  useEffect(() => {
    if (error) {
      setErrorModalVisible(true);
    }
  }, [error]);

  const handleCloseErrorModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <section className={`${styles.articlesList} ${className}`}>
      {paginationLoading ? (
        <Spin size="large" className={styles.loadingSpin} />
      ) : (
        <>
          {data &&
            data.articles &&
            Array.isArray(data.articles) &&
            data.articles.map((article) => (
              <Article
                key={article.slug}
                slugKey={article.slug}
                likes={article.favoritesCount}
                title={article.title}
                tags={article.tagList}
                author={article.author}
                date={article.createdAt}
                description={article.description}
                favorited={article.favorited}
              />
            ))}
          <ConfigProvider {...configSettings}>
            <Pagination
              className={styles.pagination}
              defaultCurrent={1}
              current={currentPage}
              onChange={handlePageChange}
              pageSize={20}
              total={data.articlesCount}
              hideOnSinglePage={true}
              showSizeChanger={false}
            />
          </ConfigProvider>
        </>
      )}
      <Modal title="Error" open={errorModalVisible} onOk={handleCloseErrorModal} onCancel={handleCloseErrorModal}>
        <p>{error}</p>
      </Modal>
    </section>
  );
};

export default ArticlesList;
