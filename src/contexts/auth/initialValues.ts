import { IAuthContext } from "./interfaces/context.interface";

export const initialValues: IAuthContext = {
    isLoading: true,
    isAuthenticated: false,
    user: {
      username: "",
      email: "",
    },
    setUser: () => {},
    setIsAuthenticated: () => {},
  }