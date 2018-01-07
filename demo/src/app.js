import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Demo from './containers/Demo';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.getElementById('root')
);
