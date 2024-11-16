import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharities,
  submitDonation,
  fetchDonationHistory,
  setCurrentDonation,
} from '../redux/slices/donorSlice';

const Donor = () => {
  const [view, setView] = useState('charityList');
  const dispatch = useDispatch();
  const donationDetails = useSelector((state) => state.donor.currentDonation);

  const renderView = () => {
    switch (view) {
      case 'charityList':
        return <CharityList setView={setView} />;
      case 'donationSetup':
        return <DonationSetup setView={setView} />;
      case 'donationConfirmation':
        return <DonationConfirmation />;
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

const CharityList = ({ setView }) => {
  const dispatch = useDispatch();
  const { charities, status, error } = useSelector((state) => state.donor);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharities());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

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

const DonationSetup = ({ setView }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const handleDonation = async () => {
    const details = { amount, frequency };
    try {
      await dispatch(submitDonation(details)).unwrap();
      dispatch(setCurrentDonation(details));
      setView('donationConfirmation');
    } catch (error) {
      console.error('Failed to submit donation:', error);
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

const DonationConfirmation = () => {
  const donationDetails = useSelector((state) => state.donor.currentDonation);

  return (
    <div>
      <h3>Donation Confirmation</h3>
      <p>
        Thank you for your donation of ${donationDetails?.amount} ({donationDetails?.frequency}).
      </p>
    </div>
  );
};

const DonationHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.donor.donationHistory);

  useEffect(() => {
    dispatch(fetchDonationHistory());
  }, [dispatch]);

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

const AccountSettings = () => (
  <div>
    <h3>Account Settings</h3>
    <p>Manage your account settings and preferences here.</p>
  </div>
);

export default Donor;