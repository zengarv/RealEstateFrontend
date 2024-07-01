import React from 'react';
import { useParams } from 'react-router-dom';
import { FaEthereum, FaMapMarkerAlt, FaBed, FaBath, FaRuler, FaList } from 'react-icons/fa';
import './PropertyDetails.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const properties = [
        {
            id: 1,
            title: 'Beautiful Beach House',
            description: 'A beautiful beach house with stunning ocean views. Perfect for family vacations or as a rental property. Enjoy the sound of waves and breathtaking sunsets from your private balcony.',
            price: '5',
            location: 'Miami, FL',
            squareFootage: 3000,
            bedrooms: 5,
            bathrooms: 3,
            amenities: ['Pool', 'WiFi', 'Parking', 'Beach Access', 'Air Conditioning'],
            image: '/images/properties/prop1.jpg'
        },
        // ... (other properties)
    ];

    const property = properties.find(property => property.id.toString() === id);

    if (!property) {
        return <p>Property not found</p>;
    }

    return (
        <div className="property-details-container">
            <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="property-price">
                    <FaEthereum /> {property.price} ETH
                </div>
            </div>
            <div className="property-info">
                <h2>{property.title}</h2>
                <p className="property-location"><FaMapMarkerAlt /> {property.location}</p>
                <div className="property-specs">
                    <span><FaBed /> {property.bedrooms} bedrooms</span>
                    <span><FaBath /> {property.bathrooms} bathrooms</span>
                    <span><FaRuler /> {property.squareFootage} sqft</span>
                </div>
                <p className="property-description">{property.description}</p>
                <div className="property-amenities">
                    <h3><FaList /> Amenities</h3>
                    <ul>
                        {property.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
                <button className="buy-button">Buy Property</button>
            </div>
        </div>
    );
};

export default PropertyDetails;