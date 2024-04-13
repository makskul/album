import React from 'react';
import { Helmet } from "react-helmet-async";
import * as config from "../../../constants";

/*
* props: { pageType: string, replacer: string }
*/
function AppMeta(props) {
    return (
        <>
            <Helmet>
                <title>{config.MetaData.home.title}</title>
                <meta name="description" content={config.MetaData.home.description}/>
            </Helmet>
        </>
    );
}

export default AppMeta;