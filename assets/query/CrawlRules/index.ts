import { executeGet } from 'util/Query/Fetch';
import { REST_API_PATH } from 'util/Config';
import { CrawlRule } from './CrawlRules.type';

export const getCrawlRules = async () => {
    return await executeGet<CrawlRule>(REST_API_PATH + '/crawl-rule');
}
