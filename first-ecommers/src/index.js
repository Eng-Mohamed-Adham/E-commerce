import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';



// import'../node_modules/bootstrap/dist/css/bootstrap.css';


import '../src/components/css/line-awesome.min.css';

import '../src/components/css/line-awesome.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,document.querySelector("#root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

