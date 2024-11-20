import axios from 'axios';
import { toast } from 'react-toastify';

// Make sure this matches your backend URL
const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

export const getFarmerProfile = async (navigate) => { // Accept navigate as an argument
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      toast.error('No authentication token found.');
      throw new Error('No authentication token found');
    }

    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log('Error:', error);

    if (error.response) {
      if (error.response.status === 401) {
        // Handle session expiration or invalid token
        toast.error('Session expired or invalid token. Please log in again.');
        // Redirect to login page if unauthorized
        navigate('/login');
      } else {
        toast.error(error.response.data.message || 'Server error');
      }
    } else if (error.request) {
      toast.error('No response from server. Please check your connection.');
    } else {
      toast.error('Failed to make request');
    }

    // Rethrow the error for further handling
    throw error;
  }
};

export const updateFarmerProfile = async (profileData) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('No authentication token found.');
      throw new Error('No authentication token found');
    }

    const response = await axios.put(`${API_URL}/users/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    toast.success('Profile updated successfully!');
    return response.data;
  } catch (error) {
    console.log('Update error:', error);
    if (error.response) {
      toast.error(error.response.data.message || 'Failed to update profile');
    } else {
      toast.error('Error updating profile');
    }
    throw error;
  }
};
