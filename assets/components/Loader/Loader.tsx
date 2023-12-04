import React from 'react';
import './Loader.scss';

const Loader = (): React.JSX.Element => {
    return (
        <div className="Loader">
            <div className="Loader-Scale">
                <div className="Loader-Main">
                    <span />
                </div>
            </div>
        </div>
    );
};

export default Loader;
