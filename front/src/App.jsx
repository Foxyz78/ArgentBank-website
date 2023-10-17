import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
