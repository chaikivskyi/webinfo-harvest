import React, { useState } from 'react';
import { useAppSelector } from 'features/hooks'

import DashboardOperations from 'components/DashboardOperations';

import './CrawlRuleDashboard.style.scss';

export const CrawlRuleDashboard = () => {
    const rule = useAppSelector(state => state.crawlRules.activeRule)
    const [isPositionChanged, setPositionChanged] = useState<boolean>(false);

    const onPositionChange = () => {
        setPositionChanged(true);
    }

    const onSave = () => {
        if (!rule || !rule.id) {

        }
    }

    const getSaveButton = () => {
        return <div>
            <button className="Button-Main">Save</button>
        </div>;
    }

    if (!rule) {
        return <div className="CrawlRuleDashboard">
            <span>Select one of the saved rules.</span>
        </div>;
    }

    return <div className="CrawlRuleDashboard">
        <h2>{ rule && rule.label } </h2>
        <DashboardOperations ruleId={ rule.id }/>
        { isPositionChanged && getSaveButton() }
    </div>;
}

export default CrawlRuleDashboard;
