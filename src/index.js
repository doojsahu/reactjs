import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from  'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Notification from './context/Notification';

ReactDOM.render(
  <React.StrictMode>
    <Notification>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Notification>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
