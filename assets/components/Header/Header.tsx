import React from 'react';

import NotificationList from 'components/NotificationList';
import './Header.scss';

const Header = (): React.JSX.Element => {
    return <>
        <NotificationList />
        <div className="Header">
            <a href={window.location.origin} className="Header-Welcome">Welcome to WebHarvest!</a>
            <h2 className="Header-Title">Get ready to crawl the web</h2>
        </div>
    </>;
}

export default Header;
