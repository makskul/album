import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Layout from "/src/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    );
}

export default App;