import { executeGet, executePost } from 'util/Query/Fetch';
import { CrawlRuleItem } from './CrawlRules.type';

export const getCrawlRules = async () => {
    return await executeGet<CrawlRuleItem>('/crawl-rule');
}

export const createRule = async (data: Omit<CrawlRuleItem, 'id' | 'operations'>) => {
    return await executePost<Omit<CrawlRuleItem, 'id' | 'operations'>>('/crawl-rule', data);
}
