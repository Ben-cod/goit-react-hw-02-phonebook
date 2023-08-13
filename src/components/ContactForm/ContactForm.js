import css from './ContactForm.module.css'





import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format'
    ),
  phone: Yup.string()
    .required('Phone is required')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number'
    ),
});

export const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label className={css.label}htmlFor="name">Name</label>
            <Field className={css.field}type="text" id="name" name="name" placeholder="Rosie Simpson" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label className={css.label}htmlFor="phone">Phone</label>
            <Field className={css.field} type="text" id="phone" name="phone" placeholder="459-12-56"/>
            <ErrorMessage name="phone" component="div" />
          </div>
          <button className={css.button} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};


