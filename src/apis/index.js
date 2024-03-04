import axios from "axios";
import configs from "../configs/index.js";

const axiosAPI = axios.create({
  baseURL: configs.baseUrl,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Interceptors: trước khi gửi data, header, ... thì phải chạy qua interceptors.
// Nó nằm trung gian từ lúc gọi API tới lúc tới server
axiosAPI.interceptors.request.use(
  function (config) {
    // Cấu hình chuỗi token vào 1 file config
    config.headers.tokenByClass = configs.tokenByClass;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Set up để chỉ lấy về data trong response
axiosAPI.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosAPI;
