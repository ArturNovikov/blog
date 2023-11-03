import React, { useEffect, useState } from 'react';
import { Spin, message, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { formatDate } from '../../utils/formatDate';
import { deleteArticleAction } from '../../store/actionCreators/fetchDeleteArticle';
import truncateText from '../../utils/truncateText';
import cat from '../../assets/images/cat-solid.svg';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';

import styles from './articleAuthor.module.scss';

const ArticleAuthor = ({ author, date }) => {
  useEffect(() => {
    console.log('Article Author; ', author);
  }, [author]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const { username, image } = author;
  const [loading, setLoading] = useState(true);
  const isUserAuthorOnOwnPage = useSelector((state) => state.isUserAuthor.isUserAuthor);
  const currentPage = useSelector((state) => state.articles.currentPage);

  const handleEdit = () => {
    dispatch(fetchArticles(currentPage));
    navigate(`/articles/${slug}/edit`);
  };

  const confirm = () => {
    deleteArticleBtn();
  };

  const cancel = () => {
    message.info('Article deletion cancelled');
  };

  const deleteArticleBtn = async () => {
    dispatch(deleteArticleAction(slug))
      .then((data) => {
        if (data) {
          message.success('Article is successfully deleted');
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
        message.error('Failed to delete article');
      });
  };

  return (
    <div className={styles.articleAuthor}>
      <p className={styles.authorName}>{truncateText(username)}</p>
      <p className={styles.authorDate}>{formatDate(date)}</p>
      {loading && <Spin className={styles.authorImage} />}
      <img
        style={loading ? { display: 'none' } : {}}
        src={image}
        onLoad={() => setLoading(false)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = cat;
          setLoading(false);
        }}
        alt="Author"
        className={styles.authorImage}
      />
      {isUserAuthorOnOwnPage && (
        <>
          <Popconfirm
            title="Delete the article"
            description="Are you sure to delete this article?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className={styles.btnDeleteArt}>Delete</button>
          </Popconfirm>
          <button className={styles.btnEditArt} onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default ArticleAuthor;
