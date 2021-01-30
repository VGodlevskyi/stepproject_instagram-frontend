import React, { useEffect } from 'react';
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../store/actions/userActions";
import "./Main.scss"

const Main = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAction())
  }, [dispatch])

  return (
    <>
      <Header/>
      <main className="main-page">
        <div className="container">
          <div className='main-page__inner'>

          </div>
        </div>
      </main>
    </>

  );
};

export default Main;