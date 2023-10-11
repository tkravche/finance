import React from 'react';
// import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';

import { RegistrationSchema } from '../ValidationSchemas';

const LoginForm = () => {
  return (
    <div class="">
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
        <Form>
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

export default LoginForm;
