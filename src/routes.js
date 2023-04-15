import React from "react";
import Home from "./pages/homePage";
import { Authenticate, Register } from "./pages/authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Authenticate/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    );
}