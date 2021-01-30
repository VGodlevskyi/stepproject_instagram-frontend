import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authTokenSelector from "../../store/selectors/authTokenSelector";
import SignUpForm from "./SignUpForm/SignUpForm";
import Copyrights from "../../components/Copyrights/Copyrights";
import './SignUp.scss'

const SignUp = () => {

  const token = useSelector(authTokenSelector);

  return (
    <>
      {
        token
          ? <Redirect to='/'/>
          : <main className='register-page'>
            <div className="register-page__inner">
              <SignUpForm/>
            </div>
            <Copyrights/>
          </main>
      }
    </>
  );
};

export default SignUp;