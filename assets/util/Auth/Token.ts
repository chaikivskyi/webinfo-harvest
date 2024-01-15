import { jwtDecode } from 'jwt-decode';

import { getItem, setItem } from 'util/BrowserStorage/BrowserStorage';
import { Token } from './Token.type';
import { AUTH_TOKEN_PATH, MILLISECONDS_IN_SECOND } from './Config';

export const setAuthToken = (token: string) => {
    const { exp } = jwtDecode<{ exp: number }>(token) || {};

    setItem<Token>(AUTH_TOKEN_PATH, { token, exp: exp * MILLISECONDS_IN_SECOND });
}

export const getAuthToken = () => {
    const token =  getItem<Token | null>(AUTH_TOKEN_PATH);

    if (!token) {
        return null;
    }

    const { token: tokenStr, exp } = token;

    if (tokenStr && Date.now() < exp) {
        return tokenStr;
    }

    return null;
}
