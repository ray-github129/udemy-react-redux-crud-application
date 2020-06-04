import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import App from './compornents/App';
import * as serviceWorker from './serviceWorker';

// アプリケーションで内部で唯一のもの、アプリケーション内部の全てのStateはこのStoreに集約される。
const store = createStore(reducer)
// アプリリーション内部の全階層でStoreを使えるようにする為、Providerでラップする。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
