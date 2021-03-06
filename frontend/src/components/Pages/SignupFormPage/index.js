import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import Header from "../../Utils/Header"
import './SignupForm.css';
import logo from "../../../images/logo.png"

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                })
        }
        return setErrors(['Password and Confirmed Password must match.'])
    };

    return (
        <div className="signup-bg">

            <Header />

            <div className="signup-form">

                <img className='signup-icon' alt="" src={logo} />

                <form className="signup-form2" onSubmit={handleSubmit}>

                    <div className="signup-input-container">


                        <h2 className="signup-title">Grab a seat at Brewr</h2>

                        <div className="signup-input">

                            <input
                                className="email-input"
                                placeholder="Email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                className="username-input"
                                placeholder="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                            <input
                                className="password-input"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <input
                                className="c-password-input"
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />

                            <ul className="signup-errors">
                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>

                            <button className="signupBtn" type="submit">Sign up</button>

                        </div>

                        <p className='login-link'>Already a Brewr member? <NavLink to="/login">Log in here</NavLink></p>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupFormPage;