export interface Notification {
    text: string;
    type: NotificationType;
}

export enum NotificationType {
    Error = 'error',
    Success = 'success'
}
