import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Loader from 'components/Loader';
import HomePage from 'route/HomePage';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <App>
                    <Routes>
                        <Route path="/" Component={HomePage} />
                    </Routes>
                </App>
            </Suspense>
        </BrowserRouter>
    );
} else {
    console.error("Root element with id 'root' not found.");
}
