import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { auth } from 'query/Auth';
import { setAuthToken } from 'util/Auth/Token';

import { FormData }  from './LoginForm.type';
import './LoginForm.styles.scss';

export const LoginForm = () => {
    const navigate = useNavigate();

    return <div className="LoginForm">
        <Formik
            initialValues={{
                password: '',
                email: '',
            }}
            onSubmit={(
                values: FormData,
                { setSubmitting }: FormikHelpers<FormData>
            ) => {
                auth(values.email, values.password).then((response) => {
                    const { token } = response;
                    setAuthToken(token);
                    navigate('/');
                }).finally(() => {
                    setSubmitting(false);
                });
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
        <Link to='/register'>Click here to register</Link>
    </div>;
}

export default LoginForm;
