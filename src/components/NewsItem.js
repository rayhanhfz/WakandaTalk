// components/NewsItem.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { addToFavorites, removeFromFavorites } from '../actions/newsActions';

function NewsItem({ article }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.news.favorites);

  const isFavorite = favorites.some(fav => fav.title === article.title);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(article));
    } else {
      dispatch(addToFavorites(article));
    }
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          {article.urlToImage && (
            <img src={article.urlToImage} className="card-img" alt={article.title} />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <p className="card-text">
              <small className="text-muted">Published at {new Date(article.publishedAt).toLocaleDateString()}</small>
            </p>
            <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
            <button className="btn btn-link" onClick={handleFavoriteClick}>
              <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} size="lg" color={isFavorite ? 'red' : 'gray'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
