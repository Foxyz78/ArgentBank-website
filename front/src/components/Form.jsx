import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signIn } from "../redux/store";
import Api from "../service/Api";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");
    const { errorMessage, setErrorMessage } = useState("");

    // gére la connexion de l'utilisateur
    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            // token
            const response = await Api("getToken", null, { email: email, password: password });
            const token = response.body.token;

            dispatch(signIn(token));
            navigate("/user");
        } catch (err) {
            console.error("Echec de la connexion à l'api " + err);
        }
    };

    return (
        <>
            <form onSubmit={handleSignIn}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
                <div className="form-error-message">{errorMessage}</div>
            </form>
        </>
    );
};

export default Form;
