import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="user" element={<User />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
