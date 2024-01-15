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

    return response.json() as T;
}
