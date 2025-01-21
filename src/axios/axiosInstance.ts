/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axiosRetry from "axios-retry";
import { message } from "antd";
import { get, KEYS } from "../utils/localStorage";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://customer-api-dev.simplus.space',
  httpsAgent: false, // Disable HTTPS
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = get(KEYS.TOKEN); // Or get the token from a Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error?.response?.data?.statusCode === 401) {
      message.warning("Session Timed Out! Please Re-Login!!!");
      return Promise.reject();
    }
    return Promise.reject(error);
  }
);

axiosRetry(axiosInstance, {
  retries: 1,
  // TODO: define error code to handle retry
  retryCondition: (error) => {
    return error.response?.status === 500;
  },
  retryDelay: (retryCount) => {
    return retryCount * 200;
  },
});

// refresh token
// axiosInstance.interceptors.response.use(
//    (response) => {
//      return response;
//    },
//    async (error) => {
//      const originalRequest = error.config;
//      if (error.response.status === 401 && !originalRequest._retry) {
//        originalRequest._retry = true;
//        // Get the refresh token from localStorage or Redux store
//        const refreshToken = localStorage.getItem('refreshToken');
//        // Make a call to refresh the token
//        const { data } = await axios.post('/auth/refresh-token', { token: refreshToken });
//        // Store the new token
//        localStorage.setItem('token', data.token);
//        // Update the Authorization header with the new token
//        axiosInstance.defaults.headers.Authorization = `Bearer ${data.token}`;
//        originalRequest.headers.Authorization = `Bearer ${data.token}`;
//        // Retry the original request
//        return axiosInstance(originalRequest);
//      }
//      return Promise.reject(error);
//    }
//  );

export default axiosInstance;
