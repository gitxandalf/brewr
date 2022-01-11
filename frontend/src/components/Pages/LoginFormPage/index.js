import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import * as sessionActions from '../../../store/session';
import Header from '../../Utils/Header';
import loginBeer from "../../../images/login-beer.jpg"
import logo from "../../../images/logo.png"

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const demoHandle = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: 'Demo-Daisy', password: 'password' }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className='bg'>

            <Header />

            <div className='form'>

                <img className='icon' alt="" src={logo} />

                <form onSubmit={handleSubmit}>

                    <div className='content-container'>

                        <h2 className='login-title'>Log in to Brewr</h2>

                        <div className='input-container'>

                            <input
                                className='usernameInput'
                                placeholder='Username or Email'
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />

                            <input
                                className='passwordInput'
                                placeholder='Password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>

                        <div className='loginBtns'>
                            <div className='loginBtn'>
                                <button type="submit">Log in</button>
                            </div>

                            <div className='demoBtn'>
                                <button type='button' onClick={demoHandle}>Demo User</button>
                            </div>
                        </div>

                        <p className='signup-link'>Not a Brewr member? <a href="signup">Sign up here.</a></p>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;