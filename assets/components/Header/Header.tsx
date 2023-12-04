import React from 'react';
import './Header.scss';

const Header = (): React.JSX.Element => {
    return <div className="Header">
        <span className="Header-Welcome">Welcome to WebHarvest!</span>
        <h2 className="Header-Title">Get ready to crawl the web</h2>
    </div>;
}

export default Header;
