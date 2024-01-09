import { executeGet, executePost } from 'util/Query/Fetch';
import { REST_API_PATH } from 'util/Config';
import { CrawlRuleItem } from './CrawlRules.type';

export const getCrawlRules = async () => {
    return await executeGet<CrawlRuleItem>(REST_API_PATH + '/crawl-rule');
}

export const createRule = async (data: Omit<CrawlRuleItem, 'id' | 'operations'>) => {
    return await executePost<Omit<CrawlRuleItem, 'id' | 'operations'>>(REST_API_PATH + '/crawl-rule', data);
}
