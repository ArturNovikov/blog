import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setIsUserAuthor } from '../../store/actionCreators/setIsUserAuthor';
import LikeIcon from '../LikeIcon/likeIcon';
import truncateText from '../../utils/truncateText';

import styles from './articleHeader.module.scss';

const ArticleHeader = ({ title, slug, likes, author, favorited }) => {
  const dispatch = useDispatch();
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  const currentUserName = useSelector((state) => state.userName.userName);
  const { slug: currentSlug } = useParams();
  const articleUsername = author.username;
  const maxLength = 50;

  const isUserAuthorOnOwnPage = isAuthorised && currentUserName === articleUsername && slug === currentSlug;

  useEffect(() => {
    dispatch(setIsUserAuthor(isUserAuthorOnOwnPage));
  }, [isAuthorised, currentUserName, articleUsername, slug, currentSlug, dispatch]);

  return (
    <div className={styles.articleHeader}>
      <Link to={`/articles/${slug}`}>
        <h2 className={styles.articleHeader__title}>{truncateText(title, maxLength)}</h2>
      </Link>
      <LikeIcon slug={slug} favoritesCount={likes} favorited={favorited} />
    </div>
  );
};

export default ArticleHeader;
