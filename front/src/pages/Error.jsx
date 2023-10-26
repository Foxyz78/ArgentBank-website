import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <h1 className="error__title">Error 404</h1>
            <p className="error__text">La page n'existe pas !</p>
            <NavLink className="error__link--accueil" to="/">
                Retourner sur l'acceuil
            </NavLink>
        </div>
    );
};

export default Error;
