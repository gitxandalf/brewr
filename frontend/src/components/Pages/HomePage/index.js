import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../../store/session";
import Navigation from "../../Utils/Navigation";
import "./HomePage.css";


function HomePage() {

    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState();
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch])

    return (
        <div>

            <div>
                <Navigation isLoaded={isLoaded} />
            </div>

            <div className='slideshow-container'>
                <div className="center-paragraph">

                    <h1 className="center-title">Find your brew.</h1>

                    <p className="center-text">Join the Brewr community, home to tens of billions of photos and 2 million groups.
                    </p>
                </div>
                <div>
                    <button id="start-for-free">
                        Start for free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;