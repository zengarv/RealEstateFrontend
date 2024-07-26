import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa';

const UserTypeSelection = ({ setUserType }) => {
    const navigate = useNavigate();

    const handleSelection = (type) => {
        setUserType(type);
        if (type === 'buyer') {
            navigate('/properties');
        } else {
            navigate('/list-property');
        }
    };

    return (
        <div className="user-type-selection">
            <h2>Are you a buyer or a seller?</h2>
            <div className="button-container">
                <button onClick={() => handleSelection('buyer')}>
                    <FaUser /> I'm a Buyer
                </button>
                <button onClick={() => handleSelection('seller')}>
                    <FaHome /> I'm a Seller
                </button>
            </div>
        </div>
    );
};

export default UserTypeSelection;