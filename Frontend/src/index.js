import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route } from 'react-router-dom'
// import Store from './Data/State/Store';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      {/* <Store> */}
        <Route path="/" component={App}/>
      {/* </Store> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
