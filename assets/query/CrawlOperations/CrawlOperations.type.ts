import { ResponseMembers } from 'util/Query/Query.type';

export interface CrawlOperationsResponse extends ResponseMembers, CrawlOperation {

}

export interface CrawlOperation {
    id: number,
    name: string,
    position: number,
    ruleId: number
}
