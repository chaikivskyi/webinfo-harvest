import React from 'react';
import Header from 'components/Header';

interface AppProps {
    children: React.JSX.Element;
}

const App = ({ children }: AppProps) => {
    return (
        <>
            <Header />
            { children }
        </>
    );
}

export default App;
