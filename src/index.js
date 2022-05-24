import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet";
import { AppRoute } from './routing';
import './stylesGlobal/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <meta charSet="utf-8" />
        <title>To do List - React - Redux - Dev.Ender</title>
        <link rel="canonical" />
    </Helmet>
    <AppRoute />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();