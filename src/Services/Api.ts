import Axios, { AxiosInstance } from 'axios';

const BASE_URL = '';

const api: AxiosInstance = Axios.create({
  baseURL: BASE_URL
});

export default api;
