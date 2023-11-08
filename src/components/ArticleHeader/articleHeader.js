import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setIsUserAuthor } from '../../store/actionCreators/setIsUserAuthor';
import LikeIcon from '../LikeIcon/likeIcon';
import truncateText from '../../utils/truncateText';
import { fetchArticles } from '../../store/actionCreators/fetchArticleGlobally';
import { ARTICLE } from '../../utils/routes';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title, slug, likes, author, favorited }) => {
  const dispatch = useDispatch();
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  const currentUserName = useSelector((state) => state.userName.userName);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const { slug: currentSlug } = useParams();
  const articleUsername = author.username;
  const maxLength = 50;

  const isUserAuthorOnOwnPage = isAuthorised && currentUserName === articleUsername && slug === currentSlug;

  const handleLinkTo = () => {
    dispatch(fetchArticles(currentPage));
  };

  useEffect(() => {
    dispatch(setIsUserAuthor(isUserAuthorOnOwnPage));
  }, [isUserAuthorOnOwnPage]);

  return (
    <div className={styles.articleHeader}>
      <Link to={ARTICLE.replace(':slug', slug)} onClick={handleLinkTo}>
        <h2 className={styles.articleHeader__title}>{truncateText(title, maxLength)}</h2>
      </Link>
      <LikeIcon slug={slug} favoritesCount={likes} favorited={favorited} />
    </div>
  );
};

export default ArticleHeader;
