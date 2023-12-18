import React from 'react';
import { useAppSelector } from 'features/hooks'

import ArrowDownIcon from 'components/ArrowDownIcon';

import './CrawlRuleDashboard.style.scss';

export const CrawlRuleDashboard = () => {
    const rule = useAppSelector(state => state.crawlRules.activeRule)

    if (!rule) {
        return <div className="CrawlRuleDashboard">
            <span>Select one of the saved rules.</span>
        </div>;
    }

    return <div className="CrawlRuleDashboard">
        <h2>{ rule && rule.label } </h2>
        <div className="CrawlRuleDashboard-Operations">
            { rule && rule.operations.map((operation, index) => {
                return (<>
                        <div className="CrawlRuleDashboard-Operation">{operation.name}</div>
                        { index !== rule.operations.length - 1 && <ArrowDownIcon /> }
                    </>
                );
            })}
        </div>
    </div>;
}

export default CrawlRuleDashboard;
