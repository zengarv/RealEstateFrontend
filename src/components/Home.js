import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Home = ({ setIsLoggedIn }) => {
    const [isRegistered, setIsRegistered] = useState(true);

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic
        setIsLoggedIn(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        setIsLoggedIn(true);
    };

    return (
        <div className="home">
            <h1>Welcome to the Real Estate Platform</h1>
            <div className="auth-section">
                {isRegistered ? (
                    <div>
                        <h2><FaSignInAlt /> Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="input-group">
                                <FaUser />
                                <input type="text" placeholder="Username or Email" required />
                            </div>
                            <div className="input-group">
                                <FaLock />
                                <input type="password" placeholder="Password" required />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <span onClick={() => setIsRegistered(false)}>Register</span></p>
                    </div>
                ) : (
                    <div>
                        <h2><FaUserPlus /> Register</h2>
                        <form onSubmit={handleRegister}>
                            <div className="input-group">
                                <FaUser />
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className="input-group">
                                <FaEnvelope />
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <FaLock />
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="input-group">
                                <FaLock />
                                <input type="password" placeholder="Confirm Password" required />
                            </div>
                            <button type="submit">Register</button>
                        </form>
                        <p>Already have an account? <span onClick={() => setIsRegistered(true)}>Login</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;