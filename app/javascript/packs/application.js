import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '../components/App';
import rootReducer from '../reducers';
// import '../assets/scss/style.scss';
// uncomment this line if you cant see styles in dev.
import defaultProps from '../data/defaultProps';

const store = createStore(rootReducer, defaultProps, applyMiddleware(thunk));

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(wrappedApp, document.body.appendChild(document.createElement('div')));
});
