import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let count = 0;
let list = [];

setInterval(() => {
  list = list.concat([count++]);
  ReactDOM.render(<App list={list} />, document.getElementById('root'));
}, 500);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
