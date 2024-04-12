import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Layout from "/src/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <>
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="author" content="Maks Kul"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" type="image/x-icon" href="/public/favicon.ico"/>
                    <meta name="keywords" content="Node, React, Express, Impressions"/>
                    <title>Hello world</title>
                </head>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Route>
            </Routes>
            </html>
        </>
    );
}

export default App;
