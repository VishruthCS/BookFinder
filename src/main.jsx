// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Import Bootstrap's CSS first
import 'bootstrap/dist/css/bootstrap.min.css'; 

// 2. Import your custom CSS last
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);