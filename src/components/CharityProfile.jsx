import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharityProfile = () => {
    const { id } = useParams();
    const [charity, setCharity] = useState(null);

    useEffect(() => {
        const fetchCharity = async () => {
            try {
                const response = await axios.get(`/charities/${id}`);
                setCharity(response.data);
            } catch (error) {
                console.error('Error fetching charity details:', error);
            }
        };
        fetchCharity();
    }, [id]);

    if (!charity) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h1 className="text-3xl font-bold mb-4">{charity.full_name}</h1>
            <p>{charity.description}</p>
            <p>
                <strong>Email:</strong> {charity.email}
            </p>
            <p>
                <strong>Phone:</strong> {charity.phone}
            </p>
            <p>
                <strong>Address:</strong> {charity.address}
            </p>
            <p>
                <strong>Category:</strong> {charity.category}
            </p>
            <p>
                <strong>Status:</strong> {charity.status}
            </p>
            <p>
                <strong>Website:</strong>{' '}
                <a href={charity.website_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {charity.website_url}
                </a>
            </p>
        </div>
    );
};

export default CharityProfile;