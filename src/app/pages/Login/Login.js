import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import authTokenSelector from "../../store/selectors/authTokenSelector";
import LoginForm from "./LoginForm/LoginForm";
import Copyrights from "../../components/Copyrights/Copyrights";
import './Login.scss'

const Login = () => {

  const token = useSelector(authTokenSelector);

  return (
    <>
      {
        token
          ? <Redirect to='/'/>
          : <main className='login-page'>
            <div className="login-page__inner">
              <div className='login-page__img'>
                <img src='/instagram-login-img.png' alt='instagram_login_img'/>
              </div>
              <LoginForm/>
            </div>
            <Copyrights/>
          </main>
      }
    </>
  );
};

export default Login;