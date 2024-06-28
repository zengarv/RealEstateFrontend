import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: 'Beautiful Beach House',
            description: 'A beautiful beach house with stunning ocean views.',
            price: '5 ETH',
            location: 'Miami, FL',
            image: '/images/properties/prop1.jpg'
        },
        {
            id: 2,
            title: 'Modern City Apartment',
            description: 'A sleek apartment in the heart of the city.',
            price: '3 ETH',
            location: 'New York, NY',
            image: '/images/properties/prop2.jpg'
        },
        // More properties...
    ]);

    const [transactions, setTransactions] = useState([
        { id: 1, listingName: 'Beautiful Beach House', listingId: 1, price: '5 ETH', transactionId: 'TX12345', status: 'Sold' },
        { id: 2, listingName: 'Modern City Apartment', listingId: 2, price: '3 ETH', transactionId: 'TX67890', status: 'Bought' },
        // More transactions...
    ]);

    const handleEdit = (id) => {
        // Implement edit functionality
        alert(`Edit property with id: ${id}`);
    };

    const handleRemove = (id) => {
        // Implement remove functionality
        setProperties(properties.filter(property => property.id !== id));
    };

    return (
        <div className="profile">
            <h2>My Properties</h2>
            <div className="property-cards">
                {properties.map(property => (
                    <div key={property.id} className="property-card">
                        <img src={property.image} alt={property.title} />
                        <div className="property-details">
                            <h3>{property.title}</h3>
                            <p>{property.description}</p>
                            <p>Price: {property.price}</p>
                            <button onClick={() => handleEdit(property.id)} className="edit-button">Edit</button>
                            <button onClick={() => handleRemove(property.id)} className="remove-button">Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Past Transactions</h2>
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Listing Name</th>
                        <th>Listing ID</th>
                        <th>Price</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={transaction.id}>
                            <td>{index + 1}</td>
                            <td>{transaction.listingName}</td>
                            <td>{transaction.listingId}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.transactionId}</td>
                            <td className={`status ${transaction.status.toLowerCase()}`}>
                                {transaction.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
