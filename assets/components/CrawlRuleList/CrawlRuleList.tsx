import React, { useEffect, useState } from 'react';

import { CrawlRuleItem } from './CrawlRulesList.type';
import { getCrawlRules } from 'query/CrawlRules';

import './CrawlRuleList.style.scss';

export const CrawlRuleList = () => {
    const [rules, setRules] = useState<CrawlRuleItem[]>([]);

    useEffect(() => {
        getCrawlRules().then((response) => {
            setRules(response.getMembers() as CrawlRuleItem[]);
        });
    }, []);

    return <div className="CrawlRuleList">{ rules.map((rule) => {
        return <div className="CrawlRuleList-Item">
            <span>{rule.label}</span>
        </div>
    }) }</div>
}

export default CrawlRuleList;
