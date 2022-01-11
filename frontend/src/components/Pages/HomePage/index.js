import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../../store/session";
import Navigation from "../../Utils/Navigation";
import Footer from "../../Utils/Footer";
import "./HomePage.css";


function HomePage() {

    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState();
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch])

    return (
        <div className="home-page-body">

            <div>
                <Navigation isLoaded={isLoaded} />
            </div>

            <div className='slideshow-container'>
                <div className="center-paragraph">

                    <h1 className="center-title">Find your brew.</h1>

                    <p className="center-text">Join the Brewr community, home to tens of billions of </p>
                    <p className="center-text-2">photos and 2 million groups.</p>
                </div>
                <div>
                    <NavLink id="start-for-free" to="/signup">Start for free</NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;