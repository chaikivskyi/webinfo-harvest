import React, {FocusEvent, useState} from 'react';

import { createRule } from 'query/CrawlRules';
import { CrawlRuleFormProps } from './CrawlRuleForm.type';
import { useAppDispatch } from 'features/hooks';
import { addNotification } from 'features/Notification/NotificationSlice';
import { NotificationType } from 'components/NotificationList/NotificationList.type';
import { fetchRules, select } from 'features/CrawlRule/CrawlRuleSlice';

import './CrawlRuleForm.styles.scss';

export const CrawlRuleForm = (props: CrawlRuleFormProps) => {
    const dispatch = useAppDispatch();
    const { rule } = props;
    const [editMode, setEditMode] = useState<boolean>(!rule);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleLabelBlur = (e: FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const { label = '' } = rule || {};

        if (label !== value) {
            createRule({ label: value }).then((response) => {
                dispatch(addNotification({ text: 'Rule successfully saved', type: NotificationType.Success }));
                setEditMode(false);
                dispatch(select(response.id))
                dispatch(fetchRules());
            }).catch((e) => {
                dispatch(addNotification({ text: e.message, type: NotificationType.Error }));
            });
        }
    }

    if (!editMode && rule && rule.label) {
        return <h1 onClick={ toggleEditMode }>{ rule && rule.label }</h1>
    }

    return <div className="CrawlRuleForm">
        <input id="label" name="label" type="text" placeholder="Label" value={ rule && rule.label } onBlur={ handleLabelBlur } />
    </div>;
}

export default CrawlRuleForm;
