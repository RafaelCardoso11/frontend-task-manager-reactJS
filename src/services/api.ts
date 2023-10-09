
import { KEY_ACCESS_TOKEN } from "@/contexts/auth/auth.keys";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});
import { toast } from "react-toastify";

api.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN); 
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const method = response.config.method?.toLowerCase();
    if (["post", "put", "patch", "delete"].includes(method as string)) {
      toast(response.data.message, { type: "success" });
    }
    return response;
  },
  (error) => {
    console.error(error.response.data);
    toast(error.response.data?.detail || error.response.data?.message , { type: "error" });
    return Promise.reject(error);
  }
);

export default api;
