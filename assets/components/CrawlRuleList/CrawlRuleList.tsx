import React, { MouseEvent, useEffect } from 'react';

import { CrawlRuleItem } from 'query/CrawlRules/CrawlRules.type';
import { useAppSelector, useAppDispatch } from 'features/hooks'
import { select, fetchRules } from 'features/CrawlRule/CrawlRuleSlice';
import PlusIcon from 'components/PlusIcon';

import './CrawlRuleList.style.scss';

export const CrawlRuleList = () => {
    const rules = useAppSelector(state => state.crawlRules.rules)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRules());
    }, []);

    const selectRule = (ruleId: number) => {
        dispatch(select(ruleId))
    }

    const renderRule = (rule: CrawlRuleItem) => {
        return <div
            className="CrawlRuleList-Item"
            key={ rule.id }
            onClick={ (event) => selectRule(rule.id) }
        >
            <span>{ rule.label }</span>
        </div>;
    }

    return <div className="CrawlRuleList ">
        { rules.map((rule) => renderRule(rule)) }
        <div className="CrawlRuleList-Add Button-Main">
            <PlusIcon clickHandler={(e) => {
                selectRule(0)
            }} />
        </div>
    </div>
}

export default CrawlRuleList;
