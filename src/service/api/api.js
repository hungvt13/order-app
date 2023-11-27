import Axios from 'axios';

const Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  //  Authorization: `Bearer `,
};
const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: Headers,
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
