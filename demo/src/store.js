import { createStore } from 'redux';
import createReducer from './reducers';

export default () =>
  createStore(
    createReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
