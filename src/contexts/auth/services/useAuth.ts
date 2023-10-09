import { useContext } from "react";
import { AuthContext } from "../context";
import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN, KEY_USER } from "../auth.keys";
import { ILogin } from "../interfaces/login.interface";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { isLoading, setIsAuthenticated, isAuthenticated, user, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const login = async ({ tokens, user }: ILogin) => {
    if (tokens) {
      localStorage.setItem(KEY_ACCESS_TOKEN, tokens[KEY_ACCESS_TOKEN]);
      localStorage.setItem(KEY_REFRESH_TOKEN, tokens[KEY_REFRESH_TOKEN]);
    }

    if (user) {
      localStorage.setItem(KEY_USER, JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(!!user);
    }

    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    localStorage.removeItem(KEY_REFRESH_TOKEN);
    setIsAuthenticated(false)
    navigate("/login");
  };
  return { isAuthenticated, isLoading, user, login, logout };
};
