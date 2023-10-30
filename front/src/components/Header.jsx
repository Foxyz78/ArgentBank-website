import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../redux/store";
import logoArgentbank from "../assets/img/argentBankLogo.png";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userProfile);
    const token = useSelector((state) => state.signIn.token);

    // déconnexion de l'utilisateur
    const handleSignOut = () => {
        dispatch(signOut());
    };
    return (
        <>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logoArgentbank} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {
                        // modification de l'affichage si l'utilisateuur est connecté ou non
                        token ? (
                            <>
                                <NavLink to="/user" className="main-nav-item">
                                    {/* {user.firstName} */}
                                    {console.log(user.userName)}
                                </NavLink>
                                <NavLink to="/" onClick={handleSignOut} className="main-nav-item">
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                                </NavLink>
                            </>
                        ) : (
                            <NavLink to="/sign-in" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                Sign In
                            </NavLink>
                        )
                    }
                </div>
            </nav>
        </>
    );
};

export default Header;
