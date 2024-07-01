import React from 'react';
import { FaIdCard, FaFileUpload } from 'react-icons/fa';

const KYCVerification = () => {
    const handleKYC = (e) => {
        e.preventDefault();
        // Handle KYC verification logic
    };

    return (
        <div className="kyc-verification">
            <h2><FaIdCard /> KYC Verification</h2>
            <form onSubmit={handleKYC}>
                <div className="input-group">
                    <FaIdCard />
                    <input type="text" placeholder="Government ID Number" required />
                </div>
                <div className="input-group">
                    <FaFileUpload />
                    <input type="file" accept="image/*" required />
                    <small>Upload a clear image of your government ID</small>
                </div>
                <div className="input-group">
                    <FaFileUpload />
                    <input type="file" accept="image/*" required />
                    <small>Upload a selfie holding your ID</small>
                </div>
                <button type="submit">Submit KYC</button>
            </form>
        </div>
    );
};

export default KYCVerification;