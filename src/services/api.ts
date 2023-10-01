import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});
import { toast } from "react-toastify";

api.interceptors.response.use(
  (response) => {
    const method = response.config.method?.toLowerCase();
    if (["post", "put", "patch", "delete"].includes(method as string)) {
      toast(response.data.message, { type: "success" });
    }
    return response;
  },
  (error) => {
    console.error(error.response.data.message);
    toast(error.message, { type: "error" });
    return Promise.reject(error);
  }
);

export default api;
