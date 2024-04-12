require('dotenv').config();
const PORT = process.env.PORT;
const React = require('react');
const express = require('express');
const app = express();
const App = require('../src/App.jsx').default;

import {Helmet} from "react-helmet";
import {StaticRouter} from "react-router-dom/server";
import { createServerContext } from "use-sse";
import { renderToPipeableStream, renderToString } from "react-dom/server";


app.use('/public', express.static('../public'));
app.use("/", async (req, res) => {
    const { ServerDataContext, resolveData } = createServerContext();

    renderToString(
        <ServerDataContext>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </ServerDataContext>
    );
    const data = await resolveData();
    console.log(data);
    // Inject into html initial data
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    const { pipe, abort: _abort } = renderToPipeableStream(
        <ServerDataContext>
            <StaticRouter location={req.url}>
                <App/>
            </StaticRouter>
        </ServerDataContext>
        ,{
            bootstrapScripts: [],
            onShellReady() {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.write(data.toHtml());
            pipe(res);
        },
            onShellError() {
            res.statusCode = 500;
            res.send("<!doctype html><p>Loading...</p>");
        },
        }
    );
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
