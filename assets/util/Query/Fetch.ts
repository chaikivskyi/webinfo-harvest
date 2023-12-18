import { ApiResponseWrapper } from './ResponseWrapper';
import { ResponseMembers } from './Query.type';

const prepareUrl = (path: string) => {
    if (0 !== path.indexOf('/')) {
        path = '/' + path;
    }

    return window.location.origin + path;
}

export const executeGet = async <T extends ResponseMembers>(path: string) => {
    const response = await fetch(prepareUrl(path));

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    return new ApiResponseWrapper(data);
}
