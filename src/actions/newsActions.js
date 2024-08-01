export const fetchNews = (query = '') => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      const data = await response.json();
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: data.articles });
    } catch (error) {
      dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error.message });
    }
  };
};

export const addToFavorites = (article) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: article
  };
};

export const removeFromFavorites = (article) => {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    payload: article
  };
};
