import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import App from './App';
import Background from './common/VideoBackground/Index';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
