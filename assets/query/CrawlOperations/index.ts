import { executeGet,executePost } from 'util/Query/Fetch';
import { REST_API_PATH } from 'util/Config';
import { CrawlOperation, CrawlOperationsBulkUpdateResponse } from './CrawlOperations.type';

export const getOperations = async (ruleId: number, sort: string, sortDirection: string = 'asc') => {
    return await executeGet<CrawlOperation>(REST_API_PATH + `/crawl-rule/${ruleId}/operations`, sort, sortDirection);
}

export const saveOperations = async (ruleId: number, operations: Partial<CrawlOperation>[]): Promise<CrawlOperationsBulkUpdateResponse> => {
    return await executePost<{ operations: Partial<CrawlOperation>[] }>(REST_API_PATH + `/crawl-rule/${ruleId}/operations`, { operations } );
}
