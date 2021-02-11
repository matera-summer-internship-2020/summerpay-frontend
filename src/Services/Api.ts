import Axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://10.0.2.2:';

const api = (port = '8080'): AxiosInstance => {
  return Axios.create({
    baseURL: `${BASE_URL}${port}`
  });
};

export default api;
