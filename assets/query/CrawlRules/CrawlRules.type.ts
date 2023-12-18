import { ResponseMembers } from 'util/Query/Query.type';

export interface CrawlRule extends ResponseMembers {
    id: number
    label: string
    operations: CrawlOperation[]
}

export interface CrawlOperation {
    id: number,
    name: string,
    position: number,
    ruleId: number
}
