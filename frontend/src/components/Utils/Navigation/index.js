import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import './Navigation.css';

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
                        <img className='home-nav-icon' alt="" src="https://cdn-icons-png.flaticon.com/512/931/931949.png" />
                        <div className='nav-home'>
                            <NavLink exact to="/">brewr</NavLink>
                        </div>
                    </div>

                    <div className="search-bar">
                        <button id="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                        <SearchBar />

                        {/* <input
                    type="text"
                    placeholder="Photos, people, or groups"
                    required
                /> */}
                    </div>

                    <div className='session-links'>
                        {isLoaded && sessionLinks}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navigation;