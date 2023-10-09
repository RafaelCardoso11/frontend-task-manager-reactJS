import { IAuth } from "@/interfaces/auth.interface";
import axios from "./api";

const baseURL = "auth";
export class AuthService {
  async login(user: IAuth) {
    const { data } = await axios.post(`${baseURL}/token`, user);

    return data;
  }
  async register(user: IAuth) {
    const { data } = await axios.post(`${baseURL}/register`, user);

    return data;
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
