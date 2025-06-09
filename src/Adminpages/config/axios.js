import axios from "axios";
import { toast } from "react-hot-toast";
import { baseUrl } from "../../URls";
import { front_end_domain } from "../../services/urls";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      token: `Bearer ${localStorage.getItem("token")}`,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.msg === "Invalid Token.") {
      toast("Logged in on another device.", { id: 1 });
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = `${front_end_domain}`;
      return Promise.reject(new Error("Invalid Token."));
    }
    return response;
  },
  (error) => {
    return Promise.reject({
      msg: error?.message || "Unknown error occurred.",
    });
  }
);

export default axiosInstance;
