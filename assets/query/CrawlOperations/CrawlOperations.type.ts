export interface CrawlOperationsBulkUpdateResponse {
    operations: CrawlOperation[]
}

export interface CrawlOperation {
    id: number,
    name: Names,
    position: number,
    selector: string,
    ruleId: number
}

export enum Names {
    Click = 'click',
    Wait = 'wait',
    ReadText = 'read_text'
}
