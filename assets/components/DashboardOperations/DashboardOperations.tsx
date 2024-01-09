import React, { useState, useEffect } from 'react';

import { DashboardOperationsProps } from './DashboardOperations.type';
import { getOperations, saveOperations as querySaveOperations } from 'query/CrawlOperations';
import { CrawlOperation } from 'query/CrawlOperations/CrawlOperations.type';
import ArrowDownIcon from 'components/ArrowDownIcon';

import './DashboardOperations.styles.scss';

export const DashboardOperations = (props: DashboardOperationsProps) => {
    const { ruleId } = props;
    const [ operations, setOperations ] = useState<CrawlOperation[]>([]);

    useEffect(() => {
        getOperations(ruleId).then((response) => {
            setOperations(response.getMembers() as CrawlOperation[]);
        });
    }, [ruleId]);

    const saveOperations = () => {
        querySaveOperations(ruleId, operations.map((operation): Partial<CrawlOperation> => {
            return {
                id: operation?.id,
                name: operation.name,
                position: operation?.position,
            };
        }));
    }

    const handlePositionChange = (index: number, newPosition: number) => {
        setOperations((prevOperations) =>
            prevOperations.map((operation, i) =>
                i === index ? { ...operation, position: newPosition } : operation
            )
        );
    };

    const getSaveButton = () => {
        return <div>
            <button className="Button-Main" onClick={ saveOperations }>Save</button>
        </div>;
    }

    return <div className="Dashboard-Operations">
        { operations.map((operation, index) => {
            return (<div key={ operation.id }>
                <div className="Dashboard-Operation">
                    <span>{ operation.name }</span>
                    <div className="Dashboard-Operation-Actions">
                        <input
                            className="Position"
                            type="number"
                            name="position"
                            value={ operation.position }
                            onChange={(e) =>
                                handlePositionChange(index, parseInt(e.target.value, 10))
                            }
                        />
                    </div>
                </div>
                {index !== operations.length - 1 && <ArrowDownIcon /> }
            </div>);
        })}
        { getSaveButton() }
    </div>;
}

export default DashboardOperations;
