import template from "./template";

require('dotenv').config();
const PORT = process.env.PORT;
const React = require('react');
const express = require('express');
const favicon = require('express-favicon');
const app = express();
const App = require('../src/App.jsx').default;

import { StaticRouter } from "react-router-dom/server";
import { createServerContext } from "use-sse";
import { HelmetProvider } from 'react-helmet-async';
import { renderToPipeableStream, renderToString } from "react-dom/server";
import * as path from "path";

const BUILD_DIRECTORY = path.join(__dirname);
const year = 1000 * 60 * 60 * 24 * 365;
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(__dirname + '../public'));
app.use(express.static(path.join(BUILD_DIRECTORY), { maxAge: year, index: false }));

app.use("/", async (req, res) => {
    const { ServerDataContext, resolveData } = createServerContext();
    const helmetContext = {};

    const ClientApp = (
        <ServerDataContext>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={req.url}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        </ServerDataContext>
    );

    renderToString(ClientApp);
    const data = await resolveData();

    const stream = renderToPipeableStream(ClientApp, {
        async onAllReady() {
            res.write(data.toHtml());
            res.end('</div><script src="client.bundle.js"></script></body></html>');
        },
    });

    res.write('<!DOCTYPE html><html lang="en"><head>');

    const { helmet } = helmetContext;
    const head = helmet ? helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() : '';
    res.write(head);
    res.write('</head><body><div id="app">');
    stream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
