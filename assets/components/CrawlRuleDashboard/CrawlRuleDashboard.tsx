import React, { useState } from 'react';
import { useAppSelector } from 'features/hooks'

import DashboardOperations from 'components/DashboardOperations';

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
        <DashboardOperations ruleId={ rule.id }/>
    </div>;
}

export default CrawlRuleDashboard;
