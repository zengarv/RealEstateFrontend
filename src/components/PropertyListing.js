import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyListing.css';

const PropertyListing = () => {
    const properties = [
        {
            id: 1,
            title: 'Beautiful Beach House',
            description: 'A beautiful beach house with stunning ocean views.',
            price: '5 ETH',
            location: 'Miami, FL',
            squareFootage: '3000 sq ft',
            amenities: ['Pool', 'WiFi', 'Parking'],
            rooms: 5,
            image: '/images/properties/prop1.jpg'
        },
        {
            id: 2,
            title: 'Modern City Apartment',
            description: 'A sleek apartment in the heart of the city.',
            price: '3 ETH',
            location: 'New York, NY',
            squareFootage: '1500 sq ft',
            amenities: ['Gym', 'WiFi', 'Doorman'],
            rooms: 3,
            image: '/images/properties/prop2.jpg'
        },
        {
            id: 3,
            title: 'Cosy Suburban Home',
            description: 'A charming home in a quiet suburban neighborhood.',
            price: '4 ETH',
            location: 'Los Angeles, CA',
            squareFootage: '2000 sq ft',
            amenities: ['Garden', 'Garage', 'Fireplace'],
            rooms: 4,
            image: '/images/properties/prop3.jpg'
        },
        {
            id: 4,
            title: 'Rustic Mountain Lodge',
            description: 'A rustic lodge nestled in the mountains with panoramic views.',
            price: '6 ETH',
            location: 'Denver, CO',
            squareFootage: '2500 sq ft',
            amenities: ['Hot Tub', 'Fire Pit', 'Ski-in/Ski-out'],
            rooms: 6,
            image: '/images/properties/prop4.jpg'
        },
    ];

    return (
        <div className="property-listing-container">
            <div className="property-listing">
                <h2>Available Properties</h2>
                <div className="property-cards">
                    {properties.map(property => (
                        <Link to={`/property/${property.id}`} key={property.id} className="property-card">
                            <img src={property.image} alt={property.title} />
                            <div className="property-details">
                                <h3>{property.title}</h3>
                                <p>{property.description}</p>
                                <p>Price: {property.price}</p>
                            </div>
                            <button className="buy-button">Buy</button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyListing;
