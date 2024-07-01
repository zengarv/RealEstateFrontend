import React, { useState } from 'react';
import { FaHome, FaHistory, FaEdit, FaTrash, FaEthereum, FaMapMarkerAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
    const [properties, setProperties] = useState([
        {
            id: 1,
            title: 'Beautiful Beach House',
            description: 'A beautiful beach house with stunning ocean views.',
            price: '5',
            location: 'Miami, FL',
            image: '/images/properties/prop1.jpg',
            bedrooms: 3,
            bathrooms: 2,
            area: 2000
        },
        {
            id: 2,
            title: 'Modern City Apartment',
            description: 'A sleek apartment in the heart of the city.',
            price: '3',
            location: 'New York, NY',
            image: '/images/properties/prop2.jpg',
            bedrooms: 2,
            bathrooms: 1,
            area: 1200
        },
    ]);

    const [transactions, setTransactions] = useState([
        { id: 1, listingName: 'Beautiful Beach House', listingId: 1, price: '5', transactionId: 'TX12345', status: 'Sold', date: '2023-06-15' },
        { id: 2, listingName: 'Modern City Apartment', listingId: 2, price: '3', transactionId: 'TX67890', status: 'Bought', date: '2023-05-20' },
    ]);

    const handleEdit = (id) => {
        // Implement edit functionality
        alert(`Edit property with id: ${id}`);
    };

    const handleRemove = (id) => {
        setProperties(properties.filter(property => property.id !== id));
    };

    return (
        <div className="profile">
            <section className="my-properties">
                <h2><FaHome /> My Properties</h2>
                <div className="property-cards">
                    {properties.map(property => (
                        <div key={property.id} className="property-card">
                            <img src={property.image} alt={property.title} />
                            <div className="property-details">
                                <h3>{property.title}</h3>
                                <p>{property.description}</p>
                                <p><FaEthereum /> {property.price} ETH</p>
                                <p><FaMapMarkerAlt /> {property.location}</p>
                                <div className="property-specs">
                                    <span>{property.bedrooms} beds</span>
                                    <span>{property.bathrooms} baths</span>
                                    <span>{property.area} sqft</span>
                                </div>
                                <div className="property-actions">
                                    <button onClick={() => handleEdit(property.id)} className="edit-button"><FaEdit /> Edit</button>
                                    <button onClick={() => handleRemove(property.id)} className="remove-button"><FaTrash /> Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="transactions">
                <h2><FaHistory /> Past Transactions</h2>
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Listing Name</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.listingName}</td>
                                <td><FaEthereum /> {transaction.price} ETH</td>
                                <td>{transaction.transactionId}</td>
                                <td className={`status ${transaction.status.toLowerCase()}`}>
                                    {transaction.status}
                                </td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Profile;