import React, { useState } from 'react';
import { FaHome, FaMoneyBillWave, FaMapMarkerAlt, FaBed, FaBath, FaRuler, FaImage, FaInfo } from 'react-icons/fa';
import './ListProperty.css';

const ListProperty = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        propertyType: '',
        yearBuilt: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({
            ...prevState,
            images: files
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle property listing submission to blockchain
        console.log('Property data:', formData);
        alert('Property listed successfully');
    };

    return (
        <div className="list-property">
            <h2><FaHome /> List a New Property</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title"><FaHome /> Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="description"><FaInfo /> Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="price"><FaMoneyBillWave /> Price (ETH):</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="location"><FaMapMarkerAlt /> Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="bedrooms"><FaBed /> Bedrooms:</label>
                        <input type="number" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bathrooms"><FaBath /> Bathrooms:</label>
                        <input type="number" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="area"><FaRuler /> Area (sqft):</label>
                        <input type="number" id="area" name="area" value={formData.area} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="propertyType">Property Type:</label>
                    <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                        <option value="">Select type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="yearBuilt">Year Built:</label>
                    <input type="number" id="yearBuilt" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="images"><FaImage /> Images:</label>
                    <input type="file" id="images" name="images" onChange={handleImageUpload} multiple required />
                </div>

                <button type="submit">List Property</button>
            </form>
        </div>
    );
};

export default ListProperty;