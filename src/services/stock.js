import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const stockService = {
  addStock: async (productData) => {
    try {
      const response = await axios.post(`${API_URL}/stocks`, productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getStocks: async () => {
    try {
      const response = await axios.get(`${API_URL}/stocks`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateStock: async (id, updateData) => {
    try {
      const response = await axios.put(`${API_URL}/stocks/${id}`, updateData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteStock: async (id) => {
    try {
      await axios.delete(`${API_URL}/stocks/${id}`);
      return true;
    } catch (error) {
      throw error;
    }
  }
}; 