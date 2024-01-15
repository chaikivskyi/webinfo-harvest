import { executePost } from 'util/Controller/Fetch';

import { AuthResponse } from './Auth.type';

export const auth = (email: string, password: string) => {
    return executePost<AuthResponse>('/auth', { email, password });
}
