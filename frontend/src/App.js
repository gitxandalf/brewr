import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/Pages/LoginFormPage";
import SignupFormPage from "./components/Pages/SignupFormPage";
import HomePage from "./components/Pages/HomePage"
import UserHomePage from "./components/Pages/UserHomePage";
import * as sessionActions from "./store/session"
import Navigation from "./components/Utils/Navigation";
import Footer from "./components/Utils/Footer";

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

  return { isLoaded } && (
    <>
      <Navigation isLoaded={true} />

      <Switch>
        <Route exact path="/">
          <UserHomePage />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;
