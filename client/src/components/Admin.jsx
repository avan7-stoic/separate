import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharityApplications,
  handleApplicationStatus,
  deleteCharity,
  fetchDonorInsights,
} from '../redux/slices/adminSlice';
import { fetchBeneficiaryStories } from '../redux/slices/charitySlice';

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

const CharityApplications = () => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.admin.charityApplications); // Ensure this selector is correct
  const status = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    dispatch(fetchCharityApplications());
  }, [dispatch]);

  const handleApproval = async (id, status) => {
    try {
      await dispatch(handleApplicationStatus({ id, status })).unwrap();
    } catch (error) {
      console.error(`Error ${status === 'approved' ? 'approving' : 'rejecting'} application:`, error);
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Charity Applications</h3>
      <ul className="space-y-4">
        {applications.map(app => (
          <li key={app.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{app.name}</h4>
                <p className="text-gray-600">{app.description}</p>
              </div>
              <div className="space-x-2">
                <button 
                  onClick={() => handleApproval(app.id, 'approved')}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button 
                  onClick={() => handleApproval(app.id, 'rejected')}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ManageCharities = () => {
  const dispatch = useDispatch();
  const charities = useSelector((state) => state.admin.charities); // Ensure this selector is correct
  const status = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const response = await fetch('/api/admin/charities');
        const data = await response.json();
        // You might want to add an action to store these charities in Redux state
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };
    fetchCharities();
  }, []);

  const handleDeleteCharity = async (id) => {
    try {
      await dispatch(deleteCharity(id)).unwrap();
    } catch (error) {
      console.error('Error deleting charity:', error);
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Manage Charities</h3>
      <div className="grid gap-4">
        {charities.map(charity => (
          <div key={charity.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{charity.name}</h4>
                <p className="text-gray-600">{charity.description}</p>
              </div>
              <button 
                onClick={() => handleDeleteCharity(charity.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DonorInsights = () => {
  const dispatch = useDispatch();
  const donors = useSelector((state) => state.admin.donors); // Ensure this selector is correct
  const status = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    dispatch(fetchDonorInsights());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Donor Insights</h3>
      <div className="grid gap-4">
        {donors.map(donor => (
          <div key={donor.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{donor.name}</h4>
                <p className="text-gray-600">Total Donated: ${donor.totalDonated}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Donation: {new Date(donor.lastDonationDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Frequency: {donor.donationFrequency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BeneficiaryStories = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.charity.stories); // Ensure this selector is correct
  const status = useSelector((state) => state.charity.status);
  const error = useSelector((state) => state.charity.error);

  useEffect(() => {
    dispatch(fetchBeneficiaryStories());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Beneficiary Stories & Inventory</h3>
      <div className="grid gap-6">
        {stories.map(story => (
          <div key={story.id} className="p-6 border rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">{story.title}</h4>
                <p className="text-gray-600">{story.content}</p>
              </div>
              {story.inventory && (
                <div className="mt-4">
                  <h5 className="font-medium">Related Inventory</h5>
                  <ul className="list-disc list-inside text-gray-600">
                    {story.inventory.map((item, index) => (
                      <li key={index}>
                        {item.name}: {item.quantity} units
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="text-sm text-gray-500">
                Posted: {new Date(story.datePosted).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    automaticReports: true,
    donationThreshold: 1000,
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div>
      <h3>Platform Settings</h3>
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold mb-2">Email Notifications</h4>
          <label>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
              className="mr-2"
            />
            Enable email notifications
          </label>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold mb-2">Automatic Reports</h4>
          <label>
            <input
              type="checkbox"
              checked={settings.automaticReports}
              onChange={(e) => handleSettingChange('automaticReports', e.target.checked)}
              className="mr-2"
            />
            Enable automatic reports
          </label>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold mb-2">Donation Threshold</h4>
          <input
            type="number"
            value={settings.donationThreshold}
            onChange={(e) => handleSettingChange('donationThreshold', e.target.value)}
            className="border px-4 py-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Administrator;
