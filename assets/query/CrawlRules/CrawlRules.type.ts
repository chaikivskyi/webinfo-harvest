import { ResponseMembers } from 'util/Query/Query.type';

export interface CrawlRuleResponse extends ResponseMembers, CrawlRule {
}

export interface CrawlRule {
    id: number
    label: string
}
