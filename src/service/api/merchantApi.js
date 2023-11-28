import axiosInstance from './api';

export const getMerchantInfo = (params, configs = {}) => axiosInstance.get(`${import.meta.env.VITE_MERCHANT_URL}/${params}`, configs);
