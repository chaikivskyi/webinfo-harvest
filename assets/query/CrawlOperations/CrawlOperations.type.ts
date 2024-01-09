export interface CrawlOperationsBulkUpdateResponse {
    operations: CrawlOperation[]
}

export interface CrawlOperation {
    id: number,
    name: string,
    position: number,
    ruleId: number
}
