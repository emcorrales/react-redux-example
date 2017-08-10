'use strict'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { applyMiddleware, createStore }  from 'redux';
import logger from 'redux-logger';
import Dashboard from './components/dashboard';
import reducers from './reducers/appReducers';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('app')
);
