import { NavLink } from "react-router-dom";

const Form = () => {
    return (
        <>
            <form>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <NavLink to="/user" className="sign-in-button">
                    Sign In
                </NavLink>
            </form>
        </>
    );
};

export default Form;