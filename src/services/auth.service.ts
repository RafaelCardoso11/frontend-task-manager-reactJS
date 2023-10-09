/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAuth } from "@/interfaces/auth.interface";
import axios from "./api";
import { toast } from "react-toastify";

const baseURL = "auth";
export class AuthService {
  async login(user: IAuth) {
    const { data } = await axios.post(`${baseURL}/token`, user);

    return data;
  }
  async register(user: IAuth) {
    try {
      const {data} = await axios.post(`${baseURL}/register`, user);
      return data;
    } catch (error: any) {
      const errorMessages = Object.values(error.response.data);
      const formattedError = errorMessages.join(' ').replace(/"/g, ' ');
      toast(formattedError, { type: "error" });
    }
  }
  async verifyToken(token: string) {
    const { data } = await axios.post(`${baseURL}/verify-token`, { token });

    return { ...data, token };
  }
  async refreshToken(token: string) {
    const { data } = await axios.post(`${baseURL}/refresh-token`, { refresh: token });

    return data;
  }
}
