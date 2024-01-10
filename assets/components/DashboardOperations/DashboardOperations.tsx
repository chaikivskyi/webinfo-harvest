import React, {useEffect, useState} from 'react';

import {DashboardOperationsProps} from './DashboardOperations.type';
import {getOperations, saveOperations as querySaveOperations} from 'query/CrawlOperations';
import {CrawlOperation, Names} from 'query/CrawlOperations/CrawlOperations.type';
import ArrowDownIcon from 'components/ArrowDownIcon';
import CrossIcon from 'components/CrossIcon';
import PlusIcon from 'components/PlusIcon';
import Loader from 'components/Loader';

import './DashboardOperations.style.scss';

export const DashboardOperations = (props: DashboardOperationsProps) => {
    const { ruleId } = props;
    const [ operations, setOperations ] = useState<CrawlOperation[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        updateOperations();
    }, [ruleId]);

    const updateOperations = () => {
        setIsLoading(true);
        getOperations(ruleId, 'position').then((response) => {
            setOperations(response.getMembers() as CrawlOperation[]);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const saveOperations = () => {
        querySaveOperations(ruleId, operations.map((operation): Partial<CrawlOperation> => {
            return {
                id: operation?.id,
                name: operation.name ? operation.name : Names.Click,
                position: operation?.position,
            };
        })).then(() => {
            updateOperations();
        });
    }

    const deleteOperation = (index: number) => {
        setOperations((prevOperations) =>
            prevOperations.filter((operation, i) => i !== index)
        );
    }

    const addOperation = () => {
        setOperations((prevOperations) => {
            const newOperation = {} as CrawlOperation;
            const updatedOperations = [...prevOperations, newOperation];
            return updatedOperations;
        });
    }

    const handleInputChange = (index: number, updatedData: Partial<CrawlOperation>) => {
        setOperations((prevOperations) =>
            prevOperations.map((operation, i) =>
                i === index ? { ...operation, ...updatedData } : operation
            )
        );
    };

    const getSaveButton = () => {
        return <div>
            <button className="Button-Main" onClick={ saveOperations }>Save</button>
        </div>;
    }

    const getLabelBlock = (operation: CrawlOperation, index: number) => {
        const keys = Object.values(Names)

        return <select name="name" value={operation.name} onChange={(e) => {
            handleInputChange(index, { name: e.target.value as Names });
        }}>
            {keys.map((value, i) => (
                <option key={i} value={value}>
                    {value}
                </option>
            ))}
        </select>;
    }

    return <div className="Dashboard-Operations">
        { isLoading && <Loader/> }
        { operations.map((operation, index) => {
            return (<div key={ index }>
                <div className="Dashboard-Operation">
                    <span>{ getLabelBlock(operation, index) }</span>
                    <div className="Dashboard-Operation-Actions">
                        <input
                            className="Position"
                            type="number"
                            name="position"
                            value={ operation.position }
                            onChange={(e) =>
                                handleInputChange(index, { position: parseInt(e.target.value, 10)})
                            }
                        />
                        <CrossIcon clickHandler={(e) => {
                            deleteOperation(index)
                        }}/>
                    </div>
                </div>
                {index !== operations.length - 1 && <ArrowDownIcon /> }
            </div>);
        })}

        <PlusIcon clickHandler={(e) => {
            addOperation()
        }}/>

        { getSaveButton() }
    </div>;
}

export default DashboardOperations;
