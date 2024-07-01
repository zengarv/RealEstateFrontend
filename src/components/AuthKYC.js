import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaIdCard, FaFileUpload, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const AuthKYC = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic
        setIsRegistered(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    const handleKYC = (e) => {
        e.preventDefault();
        // Handle KYC verification logic
    };

    return (
        <div className="auth-kyc">
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
            <div>
                <h2><FaIdCard /> KYC Verification</h2>
                <form onSubmit={handleKYC}>
                    <div className="input-group">
                        <FaIdCard />
                        <input type="text" placeholder="Government ID Number" required />
                    </div>
                    <div className="input-group">
                        <FaFileUpload />
                        <input type="file" accept="image/*" required />
                    </div>
                    <div className="input-group">
                        <FaFileUpload />
                        <input type="file" accept="image/*" required />
                        <small>Upload a selfie holding your ID</small>
                    </div>
                    <button type="submit">Submit KYC</button>
                </form>
            </div>
        </div>
    );
};

export default AuthKYC;