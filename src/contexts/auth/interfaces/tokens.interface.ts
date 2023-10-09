import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from "../auth.keys";



export interface ITokens {
    [KEY_ACCESS_TOKEN]: string;
    [KEY_REFRESH_TOKEN]: string;
}
