import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const stockService = {
  addStock: async (productData) => {
    try {
      const response = await api.post('/stocks', productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getStocks: async () => {
    try {
      const response = await api.get('/stocks');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 