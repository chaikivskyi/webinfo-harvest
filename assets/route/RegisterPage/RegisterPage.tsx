import React from 'react';

import RegisterForm from 'components/RegisterForm';

import { Navigate } from 'react-router-dom';
import { getAuthToken } from 'util/Auth/Token';

export const RegisterPage = () => {
    if (getAuthToken()) {
        return <Navigate to="/" />;
    }

    return <RegisterForm />;
}

export default RegisterPage;
