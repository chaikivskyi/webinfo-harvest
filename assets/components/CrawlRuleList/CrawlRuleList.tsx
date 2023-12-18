import React, { useEffect, useState } from 'react';

import { CrawlRuleItem } from './CrawlRulesList.type';
import { getCrawlRules } from 'query/CrawlRules';

export const CrawlRuleList = () => {
    const [rules, setRules] = useState<CrawlRuleItem[]>([]);

    useEffect(() => {
        getCrawlRules().then((response) => {
            setRules(response.getMembers() as CrawlRuleItem[]);
        });
    }, []);

    return <div>{ rules.map((rule) => {
        return <div>
            <span>{rule.label}</span>
        </div>
    }) }</div>
}

export default CrawlRuleList;
