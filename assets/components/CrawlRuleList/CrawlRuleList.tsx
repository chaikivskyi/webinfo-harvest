import React, {MouseEvent, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from 'features/hooks'
import { select, fetchRules } from 'features/CrawlRule/CrawlRuleSlice';

import './CrawlRuleList.style.scss';

export const CrawlRuleList = () => {
    const rules = useAppSelector(state => state.crawlRules.rules)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRules());
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
