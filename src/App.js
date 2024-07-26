import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import { FaHome, FaIdCard, FaList, FaSearch, FaUser } from 'react-icons/fa';
import Home from './components/Home';
import KYCVerification from './components/KYCVerification';
import PropertyListing from './components/PropertyListing';
import PropertyDetails from './components/PropertyDetails';
import Profile from './components/Profile';
import ListProperty from './components/ListProperty';
import UserTypeSelection from './components/UserTypeSelection';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              <FaHome className="logo-icon" />
              <span className="logo-text">RealEstate<span className="logo-accent">Chain</span></span>
            </Link>
            
          </div>
        </header>


        <main className="content">
          <Routes>
            <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/kyc" element={<KYCVerification setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/user-type" element={<UserTypeSelection setUserType={setUserType} />} />
            <Route
              path="/list-property"
              element={userType === 'seller' ? <ListProperty /> : <Navigate to="/" />}
            />
            <Route
              path="/properties"
              element={userType === 'buyer' ? <PropertyListing /> : <Navigate to="/" />}
            />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;