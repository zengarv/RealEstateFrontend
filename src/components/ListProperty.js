import React, { useState } from 'react';
import './ListProperty.css';

const ListProperty = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle property listing submission
        alert('Property listed successfully');
    };

    return (
        <div className="list-property">
            <h2>List a New Property</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <label>
                    Price:
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <label>
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </label>
                <label>
                    Image:
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                </label>
                <button type="submit">List Property</button>
            </form>
        </div>
    );
};

export default ListProperty;
