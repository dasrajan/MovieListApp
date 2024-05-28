import axios from 'axios';
const API_KEY = '2dca580c2a14b55200e784d157207b4d';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
});

apiClient.interceptors.request.use(
  config => {
    // const token = 'auth-token';
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle global errors
    console.log('ERR APICLIENT',error)
    if (error?.response?.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  },
);

export default apiClient;
