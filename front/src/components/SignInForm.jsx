import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signIn } from "../redux/store";
import Api from "../service/Api";

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageError, setMessageError] = useState("");

    // gére la connexion de l'utilisateur
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // token
            const response = await Api("getToken", null, { email: email, password: password });
            const token = response.body.token;
            dispatch(signIn(token));
            navigate("/user");
        } catch (err) {
            console.log("erreur : " + err);
            setMessageError("Email et/ou mot de passe érroné");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} onChange={handleEmailChange} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
                <div className="form-message-error">{messageError}</div>
            </form>
        </>
    );
};

export default SignInForm;
