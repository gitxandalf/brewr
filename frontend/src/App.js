import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/Pages/LoginFormPage";
import SignupFormPage from "./components/Pages/SignupFormPage";
import HomePage from "./components/Pages/HomePage"
import SplashPage from "./components/Pages/SplashPage";
import * as sessionActions from "./store/session"
import Navigation from "./components/Utils/Navigation";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])


  if (!sessionUser) return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
      <Route>
        <p className='not-found'>Requested page not found.</p>
      </Route>
    </Switch>
  )

  return {isLoaded} && (
    <>
      <Navigation />

      <Switch>

        <Route exact path="/">
          <SplashPage />
        </Route>

      </Switch>
    </>
  );
}

export default App;
