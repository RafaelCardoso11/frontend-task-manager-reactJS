import { AuthContext } from "./context";
import { IProps } from "./interfaces/props.interface";
import { useEffect, useState } from "react";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "react-query";
import { initialValues } from "./initialValues";
import { KEY_USER, KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from "./auth.keys";
import { IAuth } from "@/interfaces/auth.interface";

const authService = new AuthService();
export const AuthProvider: React.FC<IProps> = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialValues.isAuthenticated
  );
  const [isLoading, setIsLoading] = useState<boolean>(initialValues.isLoading);
  const [user, setUser] = useState<IAuth>(initialValues.user);

  const { mutateAsync: verifyTokenAuth } = useMutation(authService.verifyToken);
  const { mutateAsync: refreshTokenAuth } = useMutation(
    authService.refreshToken
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(KEY_USER) as string);
    setUser(user);
  }, []);
  

  useEffect(() => {
    const initializeAuth = async () => {
      const storedAccessToken = localStorage.getItem(KEY_ACCESS_TOKEN) ?? "";
      const storedRefreshToken = localStorage.getItem(KEY_REFRESH_TOKEN) ?? "";
      try {
        if (await verifyTokenAuth(storedAccessToken)) {
          const token = await refreshTokenAuth(storedRefreshToken);

          if (token) setIsAuthenticated(true);

        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [refreshTokenAuth, verifyTokenAuth]);

  return (
    <AuthContext.Provider
      value={{ setIsAuthenticated, isAuthenticated, isLoading, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
