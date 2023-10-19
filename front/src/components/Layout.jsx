import React from "react";

import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
