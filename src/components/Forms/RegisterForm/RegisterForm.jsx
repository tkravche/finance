import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { RegistrationSchema } from '../ValidationSchemas';
import { Logo } from '../../Logo/Logo';

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          password_confirm: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={formData => {
          console.log(formData);
        }}
      >
        <Form class="w-72 flex flex-col gap-y-4 pt-14 mt-0 mb-0 ml-auto mr-auto">
          <Logo />
          <Field type="text" name="username" placeholder="Name"></Field>
          <Field type="email" name="email" placeholder="Email"></Field>
          <Field type="password" name="password" placeholder="Password"></Field>
          <Field
            type="password"
            name="password_confirm"
            placeholder="Confirm Password"
          ></Field>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
