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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">Donor Dashboard</h2>
      <nav className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => setView('charityList')}
          className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Charity List
        </button>
        <button
          onClick={() => setView('donationSetup')}
          className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Donation Setup
        </button>
        <button
          onClick={() => setView('donationHistory')}
          className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Donation History
        </button>
        <button
          onClick={() => setView('accountSettings')}
          className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Account Settings
        </button>
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
      <h3 className="text-2xl font-semibold text-center text-purple-600 mb-4">Charity List</h3>
      <ul className="space-y-4">
        {charities.map((charity) => (
          <li
            key={charity.id}
            onClick={() => setView('donationSetup')}
            className="cursor-pointer hover:bg-purple-100 px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
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
      <h3 className="text-2xl font-semibold text-center text-purple-600 mb-4">Donation Setup</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-lg text-purple-600">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <label className="block text-lg text-purple-600">Frequency:</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full p-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
        <div className="text-center">
          <button
            onClick={handleDonation}
            className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Confirm Donation
          </button>
        </div>
      </div>
    </div>
  );
};

// DonationConfirmation component - Displays donation confirmation message
const DonationConfirmation = ({ donationDetails }) => (
  <div className="text-center">
    <h3 className="text-2xl font-semibold text-purple-600 mb-4">Donation Confirmation</h3>
    <p className="text-lg text-purple-600">
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
      <h3 className="text-2xl font-semibold text-center text-purple-600 mb-4">Donation History</h3>
      <ul className="space-y-4">
        {history.map((donation) => (
          <li key={donation.id} className="px-4 py-2 rounded-lg shadow-md bg-purple-50">
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
    <h3 className="text-2xl font-semibold text-center text-purple-600 mb-4">Account Settings</h3>
    <p className="text-center text-lg text-purple-600">Manage your account settings and preferences here.</p>
  </div>
);

export default Donor;
