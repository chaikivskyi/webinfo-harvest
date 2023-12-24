import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from '../../store'
import { CrawlRuleItem } from 'components/CrawlRuleList/CrawlRulesList.type';
import { getCrawlRules } from 'query/CrawlRules';

interface CrawlRuleState {
    activeId: number,
    activeRule: CrawlRuleItem | undefined,
    rules: CrawlRuleItem[],
    isLoading: boolean,
}

export const fetchRules = createAsyncThunk<CrawlRuleItem[]>('crawl-rules/fetch', async () => {
    const response = await getCrawlRules();

    return response.getMembers() as CrawlRuleItem[];
});

const initialState: CrawlRuleState = {
    activeId: Number(sessionStorage.getItem('dashboard_active_rule')) || 0,
    activeRule: undefined,
    rules: [],
    isLoading: false,
}

export const crawlRuleSlice = createSlice({
    name: 'crawlRule',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<number>) => {
            sessionStorage.setItem('dashboard_active_rule', String(action.payload));
            state.activeId = action.payload
            state.activeRule = state.rules.find((rule) => rule.id === action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRules.pending, (state: CrawlRuleState) => {
                state.isLoading = true;
            })
            .addCase(fetchRules.fulfilled, (state: CrawlRuleState, action) => {
                state.isLoading = false;
                state.rules = action.payload;

                if (state.activeId) {
                    state.activeRule = action.payload.find((rule) => rule.id === state.activeId);
                }
            })
            .addCase(fetchRules.rejected, (state: CrawlRuleState, action) => {
                state.isLoading = false;
            });
    },
})

export const {
    select,
} = crawlRuleSlice.actions

export const selectRule = (state: RootState) => state.crawlRules.activeId

export default crawlRuleSlice.reducer
