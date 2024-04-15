import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
