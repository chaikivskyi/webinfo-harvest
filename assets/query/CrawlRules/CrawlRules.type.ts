import { ResponseMembers } from 'util/Query/Query.type';

export interface CrawlRule extends ResponseMembers {
    id: number
    label: string
    operation: string
}
