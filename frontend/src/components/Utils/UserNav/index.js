import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNav.css'

function UserNav() {
    return (
        <div>
        <div className='user-nav'>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/my-photos">My Photos</NavLink>

        </div>
        </div>
    )
}

export default UserNav;