import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';

import { RegistrationSchema } from '../ValidationSchemas';
import { Logo } from '../../Logo/Logo';

const RegisterForm = () => {
  // const dispatch = useDispatch();
  const handleSubmit = formData => {
    console.log(formData);
  };
  return (
    <div class="py-10  px-16 rounded-lg w-[533px] h-[613px] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-form-cl shadow-form-shadow backdrop-blur-2xl">
      <Logo />
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          password_confirm: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, setFieldTouched }) => (
          <Form class="w-72 flex flex-col gap-y-4 pt-14 mt-0 mb-0 ml-auto mr-auto">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.0}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <Field type="text" name="username" placeholder="Name"></Field>
            </div>
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
              <Field type="email" name="email" placeholder="Email"></Field>
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
                name="password_confirm"
                placeholder="Confirm Password"
              ></Field>
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default RegisterForm;
