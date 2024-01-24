import React from 'react';

import {useAppDispatch, useAppSelector} from 'features/hooks';
import { removeNotification } from 'features/Notification/NotificationSlice';
import { Notification } from './NotificationList.type';
import './NotificationList.styles.scss';

export const NotificationList = () => {
    const notifications = useAppSelector(state => state.notification.notifications);
    const dispatch = useAppDispatch();

    const hideNotification = (id: string) => {
        dispatch(removeNotification(parseInt(id, 10)));
    }

    const renderNotification = (notification: Notification, id: string) => {
        return <div className={`Notification Notification_type_${notification.type}`} id={id} key={id}>
            <button className="Notification-Button" onClick={() => {
                hideNotification(id);
            }}>Close
            </button>
            <p className="Notification-Text">{notification.text}</p>
        </div>
    }

    return <div className="NotificationList">
        { Object.entries(notifications).map(([key, notification]: [string, Notification], index: number) => {
            return renderNotification(notification, key);
        }) }
    </div>;
}

export default NotificationList;
