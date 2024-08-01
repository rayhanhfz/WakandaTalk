import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Pastikan mengimpor thunk sebagai named import
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
