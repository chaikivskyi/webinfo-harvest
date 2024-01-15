import { configureStore } from '@reduxjs/toolkit'

import crawlRuleReducer from 'features/CrawlRule/CrawlRuleSlice';
import notificationReducer from 'features/Notification/NotificationSlice';
import 'util/Store/Store.type';

export const store = configureStore({
    reducer: {
        crawlRules: crawlRuleReducer,
        notification: notificationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
