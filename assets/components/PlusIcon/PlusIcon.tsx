import React, {MouseEvent} from 'react';
import { PlusIconProps } from './PlusIcon.type';

const PlusIcon = ({ clickHandler }: PlusIconProps) => {
    const onClick = (e: MouseEvent) => {
        if (clickHandler) {
            clickHandler(e);
        }
    }

    return <svg
        onClick={ onClick }
        className="PlusIcon InteractionElement"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>;
}
export default PlusIcon;
