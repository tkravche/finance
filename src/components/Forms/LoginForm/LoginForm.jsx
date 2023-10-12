import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';

import { RegistrationSchema } from '../ValidationSchemas';
import { Logo } from '../../Logo/Logo';
import { loginThunk } from '../../../redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { username, email, password } = values;
    dispatch(loginThunk({ username, email, password }))
      .then(data => {
        resetForm();
        toast.success(
          `Hi! ${data.user.username}, thanks for signing up. Welcome to Money Guard!`
        );
      })
      .catch(error => {
        toast.error(`${error}`);
      });
  };
  return (
    <div class="py-10  px-16 rounded-lg w-[533px] h-[613px] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-form-bg bg-cover bg-center bg-no-repeat shadow-form-shadow backdrop-blur-2xl">
      <Logo />
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, setFieldTouched }) => (
          <Form class="w-72 flex flex-col gap-y-4 pt-14 mt-0 mb-0 ml-auto mr-auto">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="white"
                className="w-8 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              ></Field>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              ></Field>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <Link to="/register">Rgister</Link>
    </div>
  );
};

export default LoginForm;
