import { configureStore } from '@reduxjs/toolkit'

import crawlRuleReducer from 'features/CrawlRule/CrawlRuleSlice';
import 'util/Store/Store.type';

export const store = configureStore({
    reducer: {
        crawlRules: crawlRuleReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
