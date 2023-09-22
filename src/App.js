import React, { useState } from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import LoginButton from "./pages/Login";
import Login from "./pages/Login";

const App = () => {
    // Assume isUserLoggedIn is a state variable that tracks the user's login status
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
