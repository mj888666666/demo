import axios from 'axios';

const API_BASE_URL = 'https://dev.178778.xyz';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServerInfo = () => apiClient.get('/');
export const getCsrfToken = () => apiClient.get('/api/csrf-cookie');
export const login = (credentials) => apiClient.post('/api/login', credentials);
export const getUser = () => apiClient.get('/api/user');
export const logout = () => apiClient.post('/api/logout');
