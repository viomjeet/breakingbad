import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/reducers/reducers';
import fetchUsers from './redux/fetchapi/fetchapi'

store.dispatch(fetchUsers());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);