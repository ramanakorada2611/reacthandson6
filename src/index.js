import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentContext from './ContextApi/StudentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentContext><App /></StudentContext>
  </React.StrictMode>
);


