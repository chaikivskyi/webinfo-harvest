import { ApiResponse } from './Query.type';

export class ApiResponseWrapper<T> {
    private readonly data: ApiResponse;
    private readonly members: T[];
    private readonly total: number;

    constructor(data: ApiResponse) {
        this.data = data;
        this.members = data['hydra:member'] as T[];
        this.total = data['hydra:totalItems'];
    }

    getMembers(): T[] {
        return this.members;
    }

    getTotal(): number {
        return this.total;
    }

    getData(): ApiResponse {
        return this.data;
    }
}

export default ApiResponseWrapper;
