import { createContext } from "react";
import { IAuthContext } from "./interfaces/context.interface";
import { initialValues } from "./initialValues";

export const AuthContext = createContext<IAuthContext>(initialValues);
