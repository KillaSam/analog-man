import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
