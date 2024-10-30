import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short!').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <div>
      <h2>Register for StemWi</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          // Handle registration logic here
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Name: </label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Password: </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Confirm Password: </label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
