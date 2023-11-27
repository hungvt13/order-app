import axiosInstance from './api';

const USER_URL = '/users';

export const getUserInfo = (params, configs = {}) => axiosInstance.get(`${USER_URL}/${params}`, configs);
