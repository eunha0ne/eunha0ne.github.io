import { createStore } from 'redux';
import rootReducer from './rootReducer';

const reduxDevtools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : {};

const store = createStore(rootReducer, reduxDevtools);

export default store;
