import { REST_API_PATH } from 'util/Config';

import { ApiResponseWrapper } from './ResponseWrapper';
import { getAuthToken } from 'util/Auth/Token';

const prepareUrl = (path: string, sort?: string, sortDir?: string) => {
    if (0 !== path.indexOf('/')) {
        path = '/' + path;
    }

    path = REST_API_PATH + path;

    if (sort) {
        path += `?order[${sort}]=${sortDir}`;
    }

    return window.location.origin + path;
}

export const executeGet = async <T>(path: string, sort?: string, sortDir: string = 'asc') => {
    const response = await fetch(prepareUrl(path, sort, sortDir), {
        headers: {
            'Content-Type': 'application/ld+json',
            'Authorization': 'Bearer ' + getAuthToken()
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();

    return new ApiResponseWrapper<T>(data);
}

export const executePost = async <T>(path: string, requestBody: Object) => {
    const response =  await fetch(prepareUrl(path), {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/ld+json',
            'Authorization': 'Bearer ' + getAuthToken()
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json() as T;
}
