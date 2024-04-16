// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from '../src/App.jsx';
//
// hydrateRoot(document.getElementById("root"), <App />);

import React from "react";
import { hydrateRoot } from 'react-dom/client';
import App from "../src/App.jsx";
import { createBroswerContext } from "use-sse";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
const BrowserDataContext = createBroswerContext();

hydrateRoot(
    document.getElementById("app"),
    <BrowserDataContext>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </BrowserDataContext>
);