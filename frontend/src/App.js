import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/Pages/LoginFormPage";
import SignupFormPage from "./components/Pages/SignupFormPage";
import * as sessionActions from "./store/session"
import Navigation from "./components/Utils/Navigation";
import HomePage from "./components/Pages/HomePage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>

      {isLoaded && (

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

        </Switch>
      )}

    </>
  );
}

export default App;
