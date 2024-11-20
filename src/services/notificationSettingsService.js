import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const notificationSettings = {
  getSettings: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/notification-settings`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateSettings: async (settings) => {
    try {
      const response = await axios.put(`${BASE_URL}/notification-settings`, settings);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/verify-email`, { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  verifyPhone: async (phoneNumber) => {
    try {
      const response = await axios.post(`${BASE_URL}/verify-phone`, { phoneNumber });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 