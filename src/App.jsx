import React, {Suspense} from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";

function App() {
    return (
        <Suspense fallback={'::::::'}>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
