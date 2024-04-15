import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import Entities from "./pages/Entities";
import Entity from "./pages/Entity";
import Nomatch from "./pages/Nomatch";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Entities />} />
                <Route path="/albums" element={<Entities />} />
                <Route path="/posts/:slug" element={<Entity />} />
                <Route path="/albums/:slug" element={<Entity />} />
                <Route path="*" element={<Nomatch />} />
            </Route>
        </Routes>
    );
}

export default App;
