import { IAuth } from "@/interfaces/auth.interface";

export interface IAuthContext {
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: IAuth;
  setUser: React.Dispatch<React.SetStateAction<IAuth>>;
}
