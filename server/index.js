require('dotenv').config();

import {StaticRouter} from "react-router-dom/server";
import { createServerContext } from "use-sse";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import pageParts from "../index.html.js";

const PORT = process.env.PORT;
const React = require('react');
const express = require('express');
const app = express();
const App = require('../src/App.jsx').default;
const entry = [pageParts]

app.use("/", async (req, res) => {
    const { ServerDataContext, resolveData } = createServerContext();

    renderToString(
        <ServerDataContext>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </ServerDataContext>
    );

    const { pipe, abort: _abort } = renderToPipeableStream(
        <ServerDataContext>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </ServerDataContext>
        ,{
            bootstrapScripts: [],
            onShellReady() {
                res.statusCode = 200;
                res.setHeader("Content-type", "text/html");
                pipe(res);
            },
            onShellError() {
                res.statusCode = 500;
                res.send("<!doctype html><p>Loading...</p>");
            },
        }
    );

    // htmlStream.pipe(res, { end: false });
    // htmlStream.on("end", () => {
    //     res.write(pageParts[1]);
    //     res.write(data.toHtml());
    //     res.write(pageParts[2]);
    //     res.end();
    // });
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
