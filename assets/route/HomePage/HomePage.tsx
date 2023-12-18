import React, {FC} from 'react';
import CrawlRuleList from 'components/CrawlRuleList';
import CrawlRuleDashboard from 'components/CrawlRuleDashboard/CrawlRuleDashboard';

import './HomePage.style.scss';

const HomePage: FC = (): React.JSX.Element => {
    return (<div className="HomePage">
        <CrawlRuleList />
        <CrawlRuleDashboard />
    </div>);
}

export default HomePage;
