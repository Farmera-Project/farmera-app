import { apiClient } from "./config";
import config from '../config/config';

// Get Farmer Profile
export const getFarmerProfile = async () => {
  try {
    const response = await apiClient.get(config.USER_ENDPOINTS.PROFILE);
    return response.data;
  } catch (error) {
    console.error("Error fetching farmer profile:", error);
    throw error;
  }
};

// Update Farmer Profile
export const updateFarmerProfile = async (payload) => {
  try {
    const response = await apiClient.patch(config.USER_ENDPOINTS.UPDATE_PROFILE, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating farmer profile:", error);
    throw error;
  }
};

// Create Product
export const createProduct = async (payload) => {
  try {
    const response = await apiClient.post(config.PRODUCT_ENDPOINTS.CREATE, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Get Product by ID
export const getProductById = async (productId) => {
  try {
    const response = await apiClient.get(`${config.PRODUCT_ENDPOINTS.GET_ALL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Update Product
export const updateProduct = async (productId, payload) => {
  try {
    const response = await apiClient.patch(
      `${config.PRODUCT_ENDPOINTS.UPDATE}/${productId}`, 
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete Product
export const deleteProduct = async (productId) => {
  try {
    const response = await apiClient.delete(
      `${config.PRODUCT_ENDPOINTS.DELETE}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Get Farmer Statistics
export const getFarmerStats = async () => {
  try {
    const response = await apiClient.get('/farmer/stats');
    return response.data;
  } catch (error) {
    console.error("Error fetching farmer statistics:", error);
    throw error;
  }
};

// Get Farmer Products
export const getFarmerProducts = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      sort: params.sort || '-createdAt',
      ...params
    }).toString();

    const response = await apiClient.get(`/farmer/products?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farmer products:", error);
    throw error;
  }
};

// Get Farmer Products Count
export const getFarmerProductsCount = async () => {
  try {
    const response = await apiClient.get('/farmer/products/count');
    return response.data;
  } catch (error) {
    console.error("Error fetching products count:", error);
    throw error;
  }
};

// Get Farmer Orders
export const getFarmerOrders = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params.limit || 10,
      page: params.page || 1,
      sort: params.sort || '-createdAt',
      ...params
    }).toString();

    const response = await apiClient.get(`/farmer/orders?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farmer orders:", error);
    throw error;
  }
};

// Update Order Status
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await apiClient.patch(
      `${config.ORDER_ENDPOINTS.UPDATE_STATUS}/${orderId}`,
      { status }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
