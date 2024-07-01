import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaHome, FaIdCard, FaList, FaSearch, FaUser } from 'react-icons/fa';
import Home from './components/Home';
import KYCVerification from './components/KYCVerification';
import PropertyListing from './components/PropertyListing';
import PropertyDetails from './components/PropertyDetails';
import Profile from './components/Profile';
import ListProperty from './components/ListProperty';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              <FaHome className="logo-icon" />
              <span className="logo-text">RealEstate<span className="logo-accent">Chain</span></span>
            </Link>
            <nav>
              <NavLink to="/" end><FaHome /> Home</NavLink>
              <NavLink to="/properties"><FaSearch /> Properties</NavLink>
              {isLoggedIn && (
                <>
                  <NavLink to="/kyc"><FaIdCard /> KYC</NavLink>
                  <NavLink to="/list-property"><FaList /> List Property</NavLink>
                  <NavLink to="/profile"><FaUser /> Profile</NavLink>
                </>
              )}
            </nav>
          </div>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/kyc" element={<KYCVerification />} />
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/properties" element={<PropertyListing />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;