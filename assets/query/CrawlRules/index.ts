import { executeGet, executePost } from 'util/Query/Fetch';
import { REST_API_PATH } from 'util/Config';
import { CrawlRuleResponse, CrawlRule } from './CrawlRules.type';

export const getCrawlRules = async () => {
    return await executeGet<CrawlRuleResponse>(REST_API_PATH + '/crawl-rule');
}

export const createRule = async (data: Omit<CrawlRule, 'id' | 'operations'>) => {
    return await executePost<Omit<CrawlRule, 'id' | 'operations'>>(REST_API_PATH + '/crawl-rule', data);
}
