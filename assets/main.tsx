import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Loader from 'components/Loader';
import HomePage from 'route/HomePage';
import RegisterPage from 'route/RegisterPage';
import LoginPage from 'route/LoginPage';

import { store } from './store';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<Loader />}>
                    <App>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path="register" element={<RegisterPage />} />
                            <Route path="login" element={<LoginPage />} />
                        </Routes>
                    </App>
                </Suspense>
            </Provider>
        </BrowserRouter>
    );
} else {
    console.error("Root element with id 'root' not found.");
}
