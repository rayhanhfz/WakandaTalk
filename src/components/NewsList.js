// components/NewsList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import SearchBar from './SearchBar';
import { fetchNews } from '../actions/newsActions';

function NewsList() {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.news.articles);
  const loading = useSelector(state => state.news.loading);
  const error = useSelector(state => state.news.error);

  useEffect(() => {
    console.log('Dispatching fetchNews');
    dispatch(fetchNews());
  }, [dispatch]);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    dispatch(fetchNews(query));
  };

  if (loading) {
    return <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log('Articles:', articles);

  return (
    <div className="container">
      <h1 className="my-4">News</h1>
      <SearchBar onSearch={handleSearch} />
      {Array.isArray(articles) && articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
