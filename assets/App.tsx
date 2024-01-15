import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Header from 'components/Header';
import { getAuthToken } from 'util/Auth/Token';

interface AppProps {
    children: React.JSX.Element;
}

const App = ({ children }: AppProps) => {
    const location = useLocation();
    const { pathname } = location;

    if (!getAuthToken() && pathname !== '/register' && pathname !== '/login') {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Header />
            { children }
        </>
    );
}

export default App;
