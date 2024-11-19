import React, { useState, useEffect } from 'react';

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5173/charities')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch charities');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data);

        if (Array.isArray(data)) {
          setCharities(data);
        }
        else if (data.data && Array.isArray(data.data)) {
          setCharities(data.data);
        } else {
          setCharities([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="charity-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="charity-card skeleton">
            <div className="skeleton-title"></div>
            <div className="skeleton-description"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <section className="charity-container" role="list">
      {charities.map((charity) => (
        <article
          key={charity.id}
          className="charity-card"
          role="listitem"
          data-status={charity.status}
        >
          <img
            src={charity.image_url || 'https://via.placeholder.com/150'}
            alt={`${charity.name} logo`}
            className="charity-image"
          />
          <h2 className="charity-name">{charity.name}</h2>
          <p className="charity-description">{charity.description}</p>
          <p className="charity-category">
            Category: {charity.category || 'Not Specified'}
          </p>
          <p className="charity-status">
            Status: {charity.status.charAt(0).toUpperCase() + charity.status.slice(1)}
          </p>
          <p className="charity-amount">
            Donations Received: ${charity.amount_received.toFixed(2)}
          </p>
          <a href={`/charity/${charity.id}`} className="charity-details-link">
            View Details
          </a>
        </article>
      ))}
    </section>
  );
};

export default Charities;