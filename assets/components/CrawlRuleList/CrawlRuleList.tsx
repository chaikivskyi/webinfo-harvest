import React, {MouseEvent, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from 'features/hooks'
import { fetchDataFailure, fetchRulesSuccess, select } from 'features/CrawlRule/CrawlRuleSlice';

import './CrawlRuleList.style.scss';
import { getCrawlRules } from 'query/CrawlRules';
import { CrawlRuleItem } from './CrawlRulesList.type';

export const CrawlRuleList = () => {
    const rules = useAppSelector(state => state.crawlRules.rules)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getCrawlRules().then((response) => {
            dispatch(fetchRulesSuccess(response.getMembers() as CrawlRuleItem[]));
        }).catch(() => dispatch(fetchDataFailure()));
    }, [dispatch]);

    const selectRule = (event: MouseEvent, ruleId: number) => {
        dispatch(select(ruleId))
    }

    return <div className="CrawlRuleList">{ rules.map((rule) => {
        return <div
            className="CrawlRuleList-Item"
            key={ rule.id }
            onClick={ (event) => selectRule(event, rule.id) }
        >
            <span>{ rule.label }</span>
        </div>
    }) }</div>
}

export default CrawlRuleList;
