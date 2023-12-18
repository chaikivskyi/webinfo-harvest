import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from '../../store'
import { CrawlRuleItem } from 'components/CrawlRuleList/CrawlRulesList.type';

interface CrawlRuleState {
    activeId: number,
    activeRule: CrawlRuleItem | undefined,
    rules: CrawlRuleItem[],
    isLoading: boolean,
}

const initialState: CrawlRuleState = {
    activeId: 0,
    activeRule: undefined,
    rules: [],
    isLoading: false,
}

export const crawlRuleSlice = createSlice({
    name: 'crawlRule',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<number>) => {
            state.activeId = action.payload
            state.activeRule = state.rules.find((rule) => rule.id === action.payload);
        },
        fetchRulesSuccess: (state, action: PayloadAction<CrawlRuleItem[]>) => {
            state.isLoading = false;
            state.rules = action.payload;
        },
        fetchDataFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const {
    select,
    fetchRulesSuccess,
    fetchDataFailure
} = crawlRuleSlice.actions

export const fetchData = () => async () => {

};

export const selectRule = (state: RootState) => state.crawlRules.activeId

export default crawlRuleSlice.reducer
