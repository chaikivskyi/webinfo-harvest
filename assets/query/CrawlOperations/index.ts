import { executeGet } from 'util/Query/Fetch';
import { REST_API_PATH } from 'util/Config';
import { CrawlOperationsResponse } from './CrawlOperations.type';

export const getOperations = async (ruleId: number) => {
    return await executeGet<CrawlOperationsResponse>(REST_API_PATH + `/crawl-rule/${ruleId}/operations`);
}
