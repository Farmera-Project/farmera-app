import { apiClient } from "./config";

// Farmer Registration
export const apiFarmerSignup = async (payload) => {
  return await apiClient.post("/users/register", payload);
};

// Farmer Login
export const apiFarmerLogin = async (payload) => {
  return await apiClient.post("users/login", payload);
};

// Wholesaler Registration
export const apiWholesalerSignup = async (payload) => {
  return await apiClient.post("/users/register", payload);
};

// Wholesaler Login
export const apiWholesalerLogin = async (payload) => {
  return await apiClient.post("/users/login", payload); 
};

// Shared Logout for Farmers and Wholesalers
export const apiLogout = async (role) => {
  const endpoint = role === "wholesaler" ? "/wholesalers/logout" : "/farmers/logout";
  return apiClient.post(endpoint);
};
