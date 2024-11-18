// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

// Fetch a list of all charities
export const fetchCharities = () => axios.get(`${API_BASE_URL}/charities`);

// Submit a donation
export const submitDonation = (donationDetails) => axios.post(`${API_BASE_URL}/donations`, donationDetails);

// Fetch donation history for a donor
export const fetchDonationHistory = () => axios.get(`${API_BASE_URL}/donations/history`);

// Fetch stories about beneficiaries
export const fetchBeneficiaryStories = () => axios.get(`${API_BASE_URL}/stories`);

// User authentication (e.g., login, register)
export const userLogin = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
export const userRegister = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);

// Fetch transaction details
export const fetchTransactionDetails = (transactionId) =>
  axios.get(`${API_BASE_URL}/transactions/${transactionId}`);

// Admin - Approve or reject charity applications
export const approveCharity = (charityId) =>
  axios.patch(`${API_BASE_URL}/admin/charities/${charityId}/approve`);
export const rejectCharity = (charityId) =>
  axios.patch(`${API_BASE_URL}/admin/charities/${charityId}/reject`);

// Charity - Post a story of beneficiaries
export const postBeneficiaryStory = (storyData) => axios.post(`${API_BASE_URL}/stories`, storyData);

export default {
  fetchCharities,
  submitDonation,
  fetchDonationHistory,
  fetchBeneficiaryStories,
  userLogin,
  userRegister,
  fetchTransactionDetails,
  approveCharity,
  rejectCharity,
  postBeneficiaryStory,
};
