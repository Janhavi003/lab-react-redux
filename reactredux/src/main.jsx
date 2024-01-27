import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/Reducer'; 
import LikeCounter from './components/LikeCounter';
import './index.css'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <LikeCounter />
  </Provider>,
  document.getElementById('root')
);