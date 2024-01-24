import React, { useState, createRef } from 'react';
import { useAppSelector } from 'features/hooks'

import CrawlRuleForm from 'components/CrawlRuleForm';
import DashboardOperations from 'components/DashboardOperations';

import './CrawlRuleDashboard.style.scss';

export const CrawlRuleDashboard = () => {
    const rule = useAppSelector(state => state.crawlRules.activeRule);

    const renderSaveButton = () => <div>
        <button className="Button-Main">Save</button>
    </div>;

    if (!rule) {
        return <div className="CrawlRuleDashboard">
            <span>Select one of the saved rules.</span>
        </div>;
    }

    return <div className="CrawlRuleDashboard">
        <CrawlRuleForm rule={ rule }/>
        <DashboardOperations ruleId={ rule.id } />
    </div>;
}

export default CrawlRuleDashboard;
