import axios from "axios";

// Create Instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://our-api.com",
  timeout: 10000,
});

// Request interceptor to add headers 
api.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error response:', error.response);
    } else if (error.request) {
      console.error('Network error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;