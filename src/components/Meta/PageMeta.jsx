import React from 'react';
import { Helmet } from "react-helmet-async";
import * as config from "../../../constants";

/*
* props: { pageType: string, replacer: string }
*/
function PageMeta(props) {
    return (
        <>
            <Helmet>
                <title>{config.MetaData[props.pageType].title}</title>
                <meta name="description" content={config.MetaData[props.pageType].description}/>
            </Helmet>
        </>
    );
}

export default PageMeta;