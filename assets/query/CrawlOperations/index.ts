import { executeGet,executePost } from 'util/Query/Fetch';
import { CrawlOperation, CrawlOperationsBulkUpdateResponse } from './CrawlOperations.type';

export const getOperations = async (ruleId: number, sort: string, sortDirection: string = 'asc') => {
    return await executeGet<CrawlOperation>(`/crawl-rule/${ruleId}/operations`, sort, sortDirection);
}

export const saveOperations = async (ruleId: number, operations: Partial<CrawlOperation>[]): Promise<CrawlOperationsBulkUpdateResponse> => {
    return await executePost<CrawlOperationsBulkUpdateResponse>(`/crawl-rule/${ruleId}/operations`, { operations } );
}
