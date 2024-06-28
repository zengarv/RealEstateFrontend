import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthKYC from './components/AuthKYC';
import PropertyListing from './components/PropertyListing';
import PropertyDetails from './components/PropertyDetails';
import Profile from './components/Profile';
import './App.css';
import ListProperty from './components/ListProperty';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Real Estate Platform</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/auth">Auth & KYC</Link></li>
              <li><Link to="/list-property">List Property</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/auth" element={<AuthKYC />} />
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/properties" element={<PropertyListing />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<h1>Welcome to the Real Estate Platform</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
