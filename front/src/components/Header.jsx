import { NavLink } from "react-router-dom";

import logoArgentbank from "../assets/img/argentBankLogo.png";

const Header = () => {
    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="index.html">
                    <img className="main-nav-logo-image" src={logoArgentbank} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Header;
