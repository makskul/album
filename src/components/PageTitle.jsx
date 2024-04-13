import React from 'react';
import * as config from "../../constants";

function PageTitle(props) {
    return (
        <>
            <h1>{config.MetaData[props.pageType].h1}</h1>
        </>
    )
}

export default PageTitle;