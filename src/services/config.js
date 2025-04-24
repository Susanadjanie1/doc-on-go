import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const localBaseURL = "http://localhost:3039/api/v1";

export const apiClient = axios.create({
  baseURL: baseURL,
});

export const localClient = axios.create({
  baseURL: localBaseURL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

localClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
