import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/Pages/LoginFormPage";
import SignupFormPage from "./components/Pages/SignupFormPage";
import HomePage from "./components/Pages/HomePage"
import Explore from "./components/Pages/Explore";
import * as sessionActions from "./store/session"
import Navigation from "./components/Utils/Navigation";
import Footer from "./components/Utils/Footer";
import UserNav from "./components/Utils/UserNav";
import MyPhotos from "./components/Pages/MyPhotos";

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
      <Navigation isLoaded={true} />

      <UserNav />

      <Switch>

        <Route exact path="/">
          <Explore />
        </Route>

        <Route path="/login">
          <Redirect to="/" />
        </Route>

        <Route path="/my-photos">
          <MyPhotos />
        </Route>

        <Route path="/explore">
          <Explore />
        </Route>

        <Route>
          <p className='not-found'>Requested page not found.</p>
        </Route>

      </Switch>


      <Footer />

    </>
  );
}

export default App;
