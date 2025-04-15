// config.js
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const localBaseURL = "http://localhost:3039/api/v1";

// For hosted doctor routes
export const apiClient = axios.create({
  baseURL: baseURL,
});

// For local patient routes
export const localClient = axios.create({
  baseURL: localBaseURL,
});

// Add interceptors for token (optional)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

localClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
