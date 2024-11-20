import { apiClient } from "./config";
import config from '../config/config';

// Get Wholesaler Profile
export const getWholesalerProfile = async () => {
  try {
    const response = await apiClient.get(config.USER_ENDPOINTS.PROFILE);
    return response.data;
  } catch (error) {
    console.error("Error fetching wholesaler profile:", error);
    throw error;
  }
};

// Update Wholesaler Profile
export const updateWholesalerProfile = async (payload) => {
  try {
    const response = await apiClient.patch(config.USER_ENDPOINTS.UPDATE_PROFILE, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating wholesaler profile:", error);
    throw error;
  }
};

// Get All Products (Available for Purchase)
export const getAllProducts = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      sort: params.sort || '-createdAt',
      ...params
    }).toString();

    const response = await apiClient.get(`/products?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Get Product Details
export const getProductDetails = async (productId) => {
  try {
    const response = await apiClient.get(`${config.PRODUCT_ENDPOINTS.GET_ALL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

// Create Order
export const createOrder = async (payload) => {
  try {
    const response = await apiClient.post(config.ORDER_ENDPOINTS.CREATE, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Get Wholesaler Orders
export const getWholesalerOrders = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      sort: params.sort || '-createdAt',
      ...params
    }).toString();

    const response = await apiClient.get(`/wholesaler/orders?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wholesaler orders:", error);
    throw error;
  }
};

// Get Order Details
export const getOrderDetails = async (orderId) => {
  try {
    const response = await apiClient.get(`${config.ORDER_ENDPOINTS.GET_ONE}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};

// Cancel Order
export const cancelOrder = async (orderId) => {
  try {
    const response = await apiClient.patch(
      `${config.ORDER_ENDPOINTS.UPDATE_STATUS}/${orderId}`,
      { status: 'cancelled' }
    );
    return response.data;
  } catch (error) {
    console.error("Error cancelling order:", error);
    throw error;
  }
};

// Get Wholesaler Statistics
export const getWholesalerStats = async () => {
  try {
    const response = await apiClient.get('/wholesaler/stats');
    return response.data;
  } catch (error) {
    console.error("Error fetching wholesaler statistics:", error);
    throw error;
  }
};

// Search Products
export const searchProducts = async (searchQuery) => {
  try {
    const response = await apiClient.get(`/products/search?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

// Filter Products by Category
export const filterProductsByCategory = async (category, params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      category,
      ...params
    }).toString();

    const response = await apiClient.get(`/products/filter?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error;
  }
};

// Get Order History
export const getOrderHistory = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      sort: params.sort || '-createdAt',
      ...params
    }).toString();

    const response = await apiClient.get(`/wholesaler/orders/history?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order history:", error);
    throw error;
  }
};

// Add Product to Favorites
export const addToFavorites = async (productId) => {
  try {
    const response = await apiClient.post('/wholesaler/favorites', { productId });
    return response.data;
  } catch (error) {
    console.error("Error adding product to favorites:", error);
    throw error;
  }
};

// Remove Product from Favorites
export const removeFromFavorites = async (productId) => {
  try {
    const response = await apiClient.delete(`/wholesaler/favorites/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing product from favorites:", error);
    throw error;
  }
};

// Get Favorite Products
export const getFavoriteProducts = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      ...params
    }).toString();

    const response = await apiClient.get(`/wholesaler/favorites?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite products:", error);
    throw error;
  }
};
