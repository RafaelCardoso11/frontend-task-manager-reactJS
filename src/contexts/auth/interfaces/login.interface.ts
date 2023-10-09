import { IAuth } from "@/interfaces/auth.interface";
import { ITokens } from "./tokens.interface";

export interface ILogin { tokens: ITokens, user: IAuth }