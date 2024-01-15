import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { postUser } from 'query/User';
import { FormData } from './RegisterForm.type';;
import { User } from 'query/User/User.type';
import { addNotification } from 'features/Notification/NotificationSlice';
import { NotificationType } from 'components/NotificationList/NotificationList.type';
import { useAppDispatch } from 'features/hooks';

import './RegisterForm.styles.scss';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return <div className="RegisterForm">
        <Formik
            initialValues={{
                password: '',
                email: '',
                firstname: '',
                lastname: '',
            }}
            onSubmit={(
                values: FormData,
                { setSubmitting }: FormikHelpers<FormData>
            ) => {
                postUser(values as User).then((response) => {
                    dispatch(addNotification({ text: 'Successfully registered, please sign in now', type: NotificationType.Success }));
                    navigate('/login');
                }).catch((e) => {
                    dispatch(addNotification({ text: e.message, type: NotificationType.Error }));
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
                        <label htmlFor="plainPassword">Password</label>
                        <Field id="plainPassword" name="plainPassword" type="password"/>
                    </div>
                    <div>
                        <label htmlFor="firstname">Firstname</label>
                        <Field id="firstname" name="firstname" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>
                        <Field id="lastname" name="lastname" type="text"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
        <Link to='/login'>Click here to login</Link>
    </div>;
}

export default RegisterForm;
