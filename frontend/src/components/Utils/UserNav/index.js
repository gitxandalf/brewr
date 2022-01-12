import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNav.css'

function UserNav() {
    return (
        <div>
        <div className='user-nav'>
            <a href="explore">Explore</a>
            <a href="my-photos">My Photos</a>
        </div>
        </div>
    )
}

export default UserNav;