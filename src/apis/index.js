import axios from "axios";
import configs from "../configs/index.js";
import store from "@/store/index.js";

const axiosAPI = axios.create({
  baseURL: configs.baseUrl,
  headers: { "X-Custom-Header": "foobar" },
});

// Interceptors: trước khi gửi data, header, ... thì phải chạy qua interceptors.
// Nó nằm trung gian từ lúc gọi API tới lúc tới server
axiosAPI.interceptors.request.use(
  function (config) {
    store.commit("setLoading", true); // Bắt đầu hiệu ứng loading

    // config.headers.tokenByClass = configs.tokenByClass;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Set up để chỉ lấy về data trong response
axiosAPI.interceptors.response.use(
  function (response) {
    store.commit("setLoading", false); // Kết thúc hiệu ứng loading
    return response.data;
  },
  function (error) {
    store.commit("setLoading", false); // Kết thúc hiệu ứng loading
    return Promise.reject(error);
  }
);

export default axiosAPI;
