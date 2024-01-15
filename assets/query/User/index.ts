import { executeGet, executePost } from 'util/Query/Fetch';

import { User } from './User.type';

export const postUser = async (user: Omit<User, 'id'>) => {
    return await executePost<Omit<User, 'id'>>('/user', user);
}
