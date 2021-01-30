import React from 'react';
import Form from "../../../components/Forms/Form";
import InstagramBrand from "../../../components/SvgIcons/InstagramBrand";
import FormInput from "../../../components/Forms/FormInput";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import { Field, Formik } from "formik";
import { NavLink } from "react-router-dom";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../../store/actions/authActions";
import './SignUpForm.scss'

const SignUpForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    name: '',
    username: '',
    password: ''
  };

  const validationSchema = object({
    email: string().min(3).required(),
    name: string().min(3).required(),
    username: string().min(3).required(),
    password: string().min(3).required()
  });

  const submitHandle = (values, { setSubmitting }) => {
    dispatch(registerUserAction(values, () => setSubmitting(false)));
  };

  return (
    <Formik initialValues={ initialValues } onSubmit={ submitHandle } validationSchema={ validationSchema }>
      {
        ({ handleReset, handleSubmit, isSubmitting }) =>
          <Form onReset={ handleReset } onSubmit={ handleSubmit }>
            <div className='register-form__header'>
              <InstagramBrand/>
            </div>
            <div className='register-form__inputs'>
              <Field as={ FormInput } name='email' type='email' placeholder='Email'/>
              <Field as={ FormInput } name='name' type='text' placeholder='Full name'/>
              <Field as={ FormInput } name='username' type='text' placeholder='Username'/>
              <Field as={ FormInput } name='password' type='password' placeholder='Password'/>
            </div>
            <FormSubmitButton type='submit' disabled={ isSubmitting }>Register</FormSubmitButton>
            <NavLink className='register-form__link' to='/login'>Sign in</NavLink>
          </Form>
      }
    </Formik>
  );
};

export default SignUpForm;