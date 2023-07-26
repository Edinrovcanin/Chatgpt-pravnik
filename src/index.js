import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import to include Routes
import './index.css';
import App from './App';
import FrontPage from './FrontPage'; // Import the FrontPage component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} /> {/* Add a route for the FrontPage component */}
        <Route path="/app" element={<App />} /> {/* Add a route for the App component */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
