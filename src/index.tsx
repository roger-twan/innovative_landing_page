import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './App';
import Background from './common/VideoBackground/Index';
import Logo from './common/Logo/Index';
import Nav from './common/Nav/Index';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Logo />
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
