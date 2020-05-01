import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { restaurantsReducer } from './reducers';


ReactDOM.render(
  <Provider store={createStore(restaurantsReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


