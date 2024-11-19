import React, { useState } from 'react';
import axios from 'axios';

const CharityApplicationForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        description: '',
        email: '',
        address: '',
        phone: '',
        gov_registration_no: '',
        website_url: '',
        category: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/charities', formData);
            setSuccessMessage('Application submitted successfully!');
            setErrorMessage('');
            setFormData({
                full_name: '',
                description: '',
                email: '',
                address: '',
                phone: '',
                gov_registration_no: '',
                website_url: '',
                category: '',
            });
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'An error occurred.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-4">Apply as a Charity</h1>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="textarea-field"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="gov_registration_no"
                    placeholder="Gov Registration No"
                    value={formData.gov_registration_no}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="url"
                    name="website_url"
                    placeholder="Website URL"
                    value={formData.website_url}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input-field"
                />
                <button type="submit" className="btn-primary">
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default CharityApplicationForm;