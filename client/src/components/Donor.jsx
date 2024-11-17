// Donor.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donor = () => {
  const [view, setView] = useState('charityList');
  const [donationDetails, setDonationDetails] = useState(null);

  const renderView = () => {
    switch (view) {
      case 'charityList':
        return <CharityList setView={setView} />;
      case 'donationSetup':
        return <DonationSetup setView={setView} setDonationDetails={setDonationDetails} />;
      case 'donationConfirmation':
        return <DonationConfirmation donationDetails={donationDetails} />;
      case 'donationHistory':
        return <DonationHistory />;
      case 'accountSettings':
        return <AccountSettings />;
      default:
        return <CharityList setView={setView} />;
    }
  };

  return (
    <div className="donor">
      <h2>Donor Dashboard</h2>
      <nav>
        <button onClick={() => setView('charityList')}>Charity List</button>
        <button onClick={() => setView('donationSetup')}>Donation Setup</button>
        <button onClick={() => setView('donationHistory')}>Donation History</button>
        <button onClick={() => setView('accountSettings')}>Account Settings</button>
      </nav>
      <div className="view-content">
        {renderView()}
      </div>
    </div>
  );
};

// CharityList component - Fetch charities from the backend
const CharityList = ({ setView }) => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const response = await axios.get('/api/charities'); // API endpoint to fetch charities
        setCharities(response.data);
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };
    fetchCharities();
  }, []);

  return (
    <div>
      <h3>Charity List</h3>
      <ul>
        {charities.map((charity) => (
          <li key={charity.id} onClick={() => setView('donationSetup')}>
            {charity.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// DonationSetup component - Submit donation details to the backend
const DonationSetup = ({ setView, setDonationDetails }) => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const handleDonation = async () => {
    const details = { amount, frequency };

    try {
      await axios.post('/api/donations', details); // API endpoint to submit donation
      setDonationDetails(details);
      setView('donationConfirmation');
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <div>
      <h3>Donation Setup</h3>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </label>
      <br />
      <label>
        Frequency:
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="one-time">One-Time</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
      </label>
      <br />
      <button onClick={handleDonation}>Confirm Donation</button>
    </div>
  );
};

// DonationConfirmation component - Displays donation confirmation message
const DonationConfirmation = ({ donationDetails }) => (
  <div>
    <h3>Donation Confirmation</h3>
    <p>
      Thank you for your donation of ${donationDetails?.amount} ({donationDetails?.frequency}).
    </p>
  </div>
);

// DonationHistory component - Fetch donation history from the backend
const DonationHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchDonationHistory = async () => {
      try {
        const response = await axios.get('/api/donations/history'); // API endpoint for donation history
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching donation history:', error);
      }
    };
    fetchDonationHistory();
  }, []);

  return (
    <div>
      <h3>Donation History</h3>
      <ul>
        {history.map((donation) => (
          <li key={donation.id}>
            ${donation.amount} - {donation.frequency} - {new Date(donation.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

// AccountSettings component - Manage account settings (placeholder)
const AccountSettings = () => (
  <div>
    <h3>Account Settings</h3>
    <p>Manage your account settings and preferences here.</p>
  </div>
);

export default Donor;
