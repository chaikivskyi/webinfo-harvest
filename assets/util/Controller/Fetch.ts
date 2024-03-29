import { ErrorResponse } from './Query.type';

const prepareUrl = (path: string) => {
    if (0 !== path.indexOf('/')) {
        path = '/' + path;
    }

    return window.location.origin + path;
}

export const executePost = async <T>(path: string, requestBody: Object) => {
    const response =  await fetch((path), {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorResponse = await response.json() as ErrorResponse;
        throw new Error(errorResponse.message);
    }

    return response.json() as T;
}
