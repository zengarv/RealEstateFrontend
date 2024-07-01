import React from 'react';
import { Link } from 'react-router-dom';
import { FaEthereum, FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';
import './PropertyListing.css';

const PropertyListing = () => {
    const properties = [
        {
            id: 1,
            title: 'Beautiful Beach House',
            description: 'A beautiful beach house with stunning ocean views.',
            price: '5',
            location: 'Miami, FL',
            squareFootage: 3000,
            bedrooms: 5,
            bathrooms: 3,
            amenities: ['Pool', 'WiFi', 'Parking'],
            image: '/images/properties/prop1.jpg'
        },
        {
            id: 2,
            title: 'Modern City Apartment',
            description: 'A sleek apartment in the heart of the city.',
            price: '3',
            location: 'New York, NY',
            squareFootage: 1500,
            bedrooms: 3,
            bathrooms: 2,
            amenities: ['Gym', 'WiFi', 'Doorman'],
            image: '/images/properties/prop2.jpg'
        },
        {
            id: 3,
            title: 'Cosy Suburban Home',
            description: 'A charming home in a quiet suburban neighborhood.',
            price: '4',
            location: 'Los Angeles, CA',
            squareFootage: 2000,
            bedrooms: 4,
            bathrooms: 2,
            amenities: ['Garden', 'Garage', 'Fireplace'],
            image: '/images/properties/prop3.jpg'
        },
        {
            id: 4,
            title: 'Rustic Mountain Lodge',
            description: 'A rustic lodge nestled in the mountains with panoramic views.',
            price: '6',
            location: 'Denver, CO',
            squareFootage: 2500,
            bedrooms: 6,
            bathrooms: 4,
            amenities: ['Hot Tub', 'Fire Pit', 'Ski-in/Ski-out'],
            image: '/images/properties/prop4.jpg'
        },
    ];

    return (
        <div className="property-listing-container">
            <h2>Available Properties</h2>
            <div className="property-grid">
                {properties.map(property => (
                    <Link to={`/property/${property.id}`} key={property.id} className="property-card">
                        <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
                            <div className="property-price">
                                <FaEthereum /> {property.price} ETH
                            </div>
                        </div>
                        <div className="property-details">
                            <h3>{property.title}</h3>
                            <p className="property-location"><FaMapMarkerAlt /> {property.location}</p>
                            <div className="property-specs">
                                <span><FaBed /> {property.bedrooms} beds</span>
                                <span><FaBath /> {property.bathrooms} baths</span>
                                <span><FaRuler /> {property.squareFootage} sqft</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PropertyListing;