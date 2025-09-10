
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Import Bootstrap's CSS first 
// (Bootstrap provides the base styling and must load before your custom styles)
import 'bootstrap/dist/css/bootstrap.min.css'; 

// 2. Import your custom CSS last 
// (This ensures your custom styles can override Bootstrap defaults if needed)
import './index.css';

// Create the React root and render the App component
// React.StrictMode helps highlight potential issues during development
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
