import axios, {AxiosInstance} from 'axios';
import {BASE_URL, store} from '../exporter';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => config,
    (err: any) => {
      Promise.reject(err);
    },
  );
};

export {HTTP_CLIENT, setupAxios, initialConfig};
