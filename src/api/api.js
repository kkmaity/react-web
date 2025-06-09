import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://jsonfakery.com', // Base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor — Add auth token if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Optional: Auth token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor — Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn('Unauthorized - Redirect to login if needed');
      // Example: window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

// Export Axios helper methods
export const get = (url, config = {}) => api.get(url, config);
export const post = (url, data, config = {}) => api.post(url, data, config);
export const put = (url, data, config = {}) => api.put(url, data, config);
export const del = (url, config = {}) => api.delete(url, config);

export default api;
