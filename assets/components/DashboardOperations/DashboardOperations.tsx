import React, { useState, useEffect } from 'react';

import { DashboardOperationsProps } from './DashboardOperations.type';
import { getOperations } from 'query/CrawlOperations';
import { CrawlOperation } from 'query/CrawlOperations/CrawlOperations.type';
import ArrowDownIcon from 'components/ArrowDownIcon';

export const DashboardOperations = (props: DashboardOperationsProps) => {
    const {ruleId} = props;
    const [operations, setOperations] = useState<CrawlOperation[]>([]);

    useEffect(() => {
        getOperations(ruleId).then((response) => {
            setOperations(response.getMembers() as CrawlOperation[]);
        });
    }, [ruleId]);

    return <div className="CrawlRuleDashboard-Operations">
        { operations.map((operation, index) => {
            return (<div key={ operation.id }>
                <div className="CrawlRuleDashboard-Operation">
                    <span>{ operation.name }</span>
                    <div className="CrawlRuleDashboard-Operation-Actions">
                        <input
                            className="Position"
                            type="number"
                            name="position"
                            defaultValue={ operation.position }
                        />
                    </div>
                </div>
                {index !== operations.length - 1 && <ArrowDownIcon /> }
            </div>);
        })}
    </div>;
}

export default DashboardOperations;
