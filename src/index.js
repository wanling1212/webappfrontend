import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './MainPage/Mainpage.js';
import reportWebVitals from './reportWebVitals';
import { ScheduleProvider } from './Context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScheduleProvider>
      <Mainpage />
    </ScheduleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
