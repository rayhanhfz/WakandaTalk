// components/Favorites.js

import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

function Favorites() {
  const favorites = useSelector(state => state.news.favorites);

  if (favorites.length === 0) {
    return <div className="container mt-4">No favorites added yet.</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="my-4">Favorites</h1>
      {favorites.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default Favorites;
