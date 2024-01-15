import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Notification } from 'components/NotificationList/NotificationList.type';

const initialState: { notifications: Record<number, Notification> } = {
    notifications: {}
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Notification>) => {
            state.notifications[Date.now()] = action.payload;
        },
        removeNotification: (state, action: PayloadAction<number>) => {
            const { [action.payload]: id, ...shownNotifications } = state.notifications;
            state.notifications = shownNotifications;
        },
    },
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
