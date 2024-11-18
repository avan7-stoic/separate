import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import CharityApplications from './CharityApplications';
// import ManageCharities from './ManageCharities';
// import DonorInsights from './DonorInsights';
// import BeneficiaryStories from './BeneficiaryStories';
// import PlatformSettings from './PlatformSettings';

const Administrator = () => {
  const [view, setView] = useState('charityApplications');

  const renderView = () => {
    switch (view) {
      case 'charityApplications':
      // return <CharityApplications />;
      case 'manageCharities':
      // return <ManageCharities />;
      case 'donorInsights':
      // return <DonorInsights />;
      case 'beneficiaryStories':
      // return <BeneficiaryStories />;
      case 'platformSettings':
      // return <PlatformSettings />;
      default:
      // return <CharityApplications />;
    }
  };

  return (
    <div className="administrator p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Administrator Dashboard</h2>
      <nav className="mb-6">
        <button
          onClick={() => setView('charityApplications')}
          className="btn-nav"
        >
          Charity Applications
        </button>
        <button
          onClick={() => setView('manageCharities')}
          className="btn-nav"
        >
          Manage Charities
        </button>
        <button
          onClick={() => setView('donorInsights')}
          className="btn-nav"
        >
          Donor Insights
        </button>
        <button
          onClick={() => setView('beneficiaryStories')}
          className="btn-nav"
        >
          Beneficiary Stories & Inventory
        </button>
        <button
          onClick={() => setView('platformSettings')}
          className="btn-nav"
        >
          Platform Settings
        </button>
      </nav>
      <div className="view-content">
        {renderView()}
      </div>
    </div>
  );
};

export default Administrator;
