import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from '../reducers';
import '../assets/scss/style.scss';
import defaultProps from '../data/defaultProps';

const store = createStore(rootReducer, defaultProps);

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(wrappedApp, document.body.appendChild(document.createElement('div')));
});
