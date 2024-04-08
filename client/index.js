// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from '../src/App.jsx';
//
// hydrateRoot(document.getElementById("root"), <App />);

import React from "react";
import { hydrate } from "react-dom";
import App from "../src/App.jsx";
import { createBroswerContext } from "use-sse";
import {BrowserRouter} from "react-router-dom";
import Layout from "../src/Layout";
const BrowserDataContext = createBroswerContext();

hydrate(
    <BrowserDataContext>
        <BrowserRouter path="/" element={<Layout />}>
            <App />
        </BrowserRouter>
    </BrowserDataContext>,
    document.getElementById("app")
);