import React from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetails.css';

const PropertyDetails = () => {
    const { id } = useParams();
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
            image: 'path/to/beach-house.jpg'
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
            image: 'path/to/city-apartment.jpg'
        },
        // Add more properties as needed
    ];

    const property = properties.find(property => property.id.toString() === id);

    if (!property) {
        return <p>Property not found</p>;
    }

    return (
        <div className="property-details">
            <h2>{property.title}</h2>
            <img src={property.image} alt={property.title} />
            <p>{property.description}</p>
            <p><strong>Price:</strong> {property.price}</p>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Square Footage:</strong> {property.squareFootage}</p>
            <p><strong>Amenities:</strong> {property.amenities.join(', ')}</p>
            <p><strong>Rooms:</strong> {property.rooms}</p>
        </div>
    );
};

export default PropertyDetails;

