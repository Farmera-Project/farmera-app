import axios from 'axios';

const BASE_URL = 'your_api_url';

export const notificationService = {
  getPreferences: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/notification-preferences`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePreferences: async (preferences) => {
    try {
      const response = await axios.post(`${BASE_URL}/notification-preferences`, preferences);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  testNotification: async (type, channel) => {
    try {
      const response = await axios.post(`${BASE_URL}/test-notification`, {
        type,
        channel,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
