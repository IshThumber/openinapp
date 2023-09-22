import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";

import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        isAuthenticated === "true" ? (
                            <Main />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
