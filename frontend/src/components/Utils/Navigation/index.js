import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../../images/logo.png"

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton id="profileBtn" user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink id="loginBtn" to="/login">Log In</NavLink>
                <NavLink id="signupBtn" to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (

        <div className='body'>
            <div className='nav-bar-container'>

                <div className='nav-ul'>
                    <div className='left-nav'>
                        <img className='home-nav-icon' alt="" src={logo} />
                        <div className='nav-home'>
                            <NavLink exact to="/">brewr</NavLink>
                        </div>
                    </div>

                    {/* <div className="search-bar">
                        <button id="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                        <SearchBar />
                    </div> */}

                    <div className='session-links'>
                        {isLoaded && sessionLinks}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navigation;