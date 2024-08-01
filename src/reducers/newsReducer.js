const initialState = {
  articles: [],
  favorites: [],
  loading: false,
  error: ''
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, loading: false, articles: action.payload };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(article => article.title !== action.payload.title) };
    default:
      return state;
  }
};

export default newsReducer;
