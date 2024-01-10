import { ApiResponseWrapper } from './ResponseWrapper';

const prepareUrl = (path: string, sort?: string, sortDir?: string) => {
    if (0 !== path.indexOf('/')) {
        path = '/' + path;
    }

    if (sort) {
        path += `?order[${sort}]=${sortDir}`;
    }

    return window.location.origin + path;
}

export const executeGet = async <T>(path: string, sort?: string, sortDir: string = 'asc') => {
    const response = await fetch(prepareUrl(path, sort, sortDir));

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    return new ApiResponseWrapper<T>(data);
}

export const executePost = async <T>(path: string, requestBody: T) => {
    const response =  await fetch(path, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/ld+json',
        },
    });

    return response.json();
}
