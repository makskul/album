import React from "react";
import App from "../src/App";

function Template() {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>SSR React 18 example</title>
            </head>
            <body>
                <div id="app">
                    <App />
                </div>
                <script src='/client.bundle.js'></script>
            </body>
        </html>
    )
}

export default Template