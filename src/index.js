import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import {store} from './store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='countries-redux-toolkit'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
