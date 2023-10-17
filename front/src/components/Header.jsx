import logoArgentbank from "../assets/img/argentBankLogo.png";

const Header = () => {
    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="index.html">
                    <img className="main-nav-logo-image" src={logoArgentbank} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                    <div>
                        <a className="main-nav-item" href="#">
                            <i className="fa fa-user-circle"></i>
                            "Sign In"
                        </a>
                    </div>
                </a>
            </nav>
        </>
    );
};

export default Header;
