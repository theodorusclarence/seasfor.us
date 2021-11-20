import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.seasfor.us/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.defaults.withCredentials = false;

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

export default axiosClient;
