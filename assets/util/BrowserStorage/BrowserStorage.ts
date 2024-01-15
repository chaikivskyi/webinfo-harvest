export const setItem = <T>(path: string, data: T, expiration?: number) => {
    localStorage.setItem(path, JSON.stringify({
        data,
        expiration,
        createdAt: Date.now(),
    }));
}

export const getItem = <T>(path: string): T | null => {
    try {
        const entryObject = JSON.parse(localStorage.getItem(path) || '');
        const { data, expiration, createdAt } = entryObject;
        const MILLISECONDS_TO_SECONDS = 1000;

        if (expiration && Date.now() - createdAt > expiration * MILLISECONDS_TO_SECONDS) {
            localStorage.removeItem(path);

            return null;
        }

        return data as T;
    } catch {
        return null;
    }
}
