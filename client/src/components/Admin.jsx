// Administrator.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Administrator = () => {
  const [view, setView] = useState('charityApplications');

  const renderView = () => {
    switch (view) {
      case 'charityApplications':
        return <CharityApplications />;
      case 'manageCharities':
        return <ManageCharities />;
      case 'donorInsights':
        return <DonorInsights />;
      case 'beneficiaryStories':
        return <BeneficiaryStories />;
      case 'platformSettings':
        return <PlatformSettings />;
      default:
        return <CharityApplications />;
    }
  };

  return (
    <div className="administrator">
      <h2>Administrator Dashboard</h2>
      <nav>
        <button onClick={() => setView('charityApplications')}>Charity Applications</button>
        <button onClick={() => setView('manageCharities')}>Manage Charities</button>
        <button onClick={() => setView('donorInsights')}>Donor Insights</button>
        <button onClick={() => setView('beneficiaryStories')}>Beneficiary Stories & Inventory</button>
        <button onClick={() => setView('platformSettings')}>Platform Settings</button>
      </nav>
      <div className="view-content">
        {renderView()}
      </div>
    </div>
  );
};

// CharityApplications component - Displays charity applications with approve/reject options
const CharityApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/admin/charity-applications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching charity applications:', error);
      }
    };
    fetchApplications();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      await axios.patch(`/api/admin/charity-applications/${id}`, { status });
      setApplications(applications.filter(app => app.id !== id));
    } catch (error) {
      console.error(`Error ${status === 'approved' ? 'approving' : 'rejecting'} application:`, error);
    }
  };

  return (
    <div>
      <h3>Charity Applications</h3>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.name}
            <button onClick={() => handleApproval(app.id, 'approved')}>Approve</button>
            <button onClick={() => handleApproval(app.id, 'rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ManageCharities component - Allows viewing and managing charities
const ManageCharities = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const response = await axios.get('/api/admin/charities');
        setCharities(response.data);
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };
    fetchCharities();
  }, []);

  const handleDeleteCharity = async (id) => {
    try {
      await axios.delete(`/api/admin/charities/${id}`);
      setCharities(charities.filter(charity => charity.id !== id));
    } catch (error) {
      console.error('Error deleting charity:', error);
    }
  };

  return (
    <div>
      <h3>Manage Charities</h3>
      <ul>
        {charities.map(charity => (
          <li key={charity.id}>
            {charity.name}
            <button onClick={() => handleDeleteCharity(charity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// DonorInsights component - Provides non-anonymous donor data and donation summaries
const DonorInsights = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('/api/admin/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donor insights:', error);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div>
      <h3>Donor Insights</h3>
      <ul>
        {donors.map(donor => (
          <li key={donor.id}>
            {donor.name} - ${donor.totalDonated}
          </li>
        ))}
      </ul>
    </div>
  );
};

// BeneficiaryStories component - View stories and inventory list from charities
const BeneficiaryStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('/api/admin/beneficiary-stories');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching beneficiary stories:', error);
      }
    };
    fetchStories();
  }, []);

  return (
    <div>
      <h3>Beneficiary Stories & Inventory</h3>
      <ul>
        {stories.map(story => (
          <li key={story.id}>{story.content}</li>
        ))}
      </ul>
    </div>
  );
};

// PlatformSettings component - Placeholder for system-wide configurations
const PlatformSettings = () => (
  <div>
    <h3>Platform Settings</h3>
    <p>Manage system-wide settings and user permissions here.</p>
  </div>
);

export default Administrator;
