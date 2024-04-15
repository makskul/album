require('dotenv').config();
const PORT = process.env.PORT;
const React = require('react');
const express = require('express');
const favicon = require('express-favicon');
const app = express();

import { StaticRouter } from "react-router-dom/server";
import { createServerContext } from "use-sse";
import { HelmetProvider } from 'react-helmet-async';
import { renderToPipeableStream, renderToString } from "react-dom/server";
import * as path from "path";
import Template from "./template";

const BUILD_DIRECTORY = path.join(__dirname);
const year = 1000 * 60 * 60 * 24 * 365;
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(__dirname + '../public'));
app.use(express.static(path.join(BUILD_DIRECTORY), { maxAge: year, index: false }));

app.use("/", async (req, res) => {
    const { ServerDataContext, resolveData } = createServerContext();
    const helmetContext = {};

    const JSX = (
        <ServerDataContext>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={req.url}>
                    <Template />
                </StaticRouter>
            </HelmetProvider>
        </ServerDataContext>
    );
    renderToString(JSX);

    const data = await resolveData();
    const { pipe } = renderToPipeableStream(JSX, {
        onShellReady() {
            res.setHeader('content-type', 'text/html');
            res.write(data.toHtml());
            pipe(res);
        }
    });
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
