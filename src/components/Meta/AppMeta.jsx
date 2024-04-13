import React from 'react';
import { Helmet } from "react-helmet-async";

function AppMeta() {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Maks Kul"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/x-icon" href="/public/favicon.ico"/>
                <meta name="keywords" content="Node, React, Express, Impressions"/>
            </head>
        </>
    );
}

export default AppMeta;