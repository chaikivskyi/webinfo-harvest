import React from 'react';

import LoginForm from 'components/LoginForm';
import { getAuthToken } from 'util/Auth/Token';
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
    if (getAuthToken()) {
        return <Navigate to="/" />;
    }

    return <LoginForm />;
}

export default LoginPage;
