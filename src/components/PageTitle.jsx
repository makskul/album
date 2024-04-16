import React from 'react';
import * as config from "../../constants";

function PageTitle(props) {
    return (
        <h1 className={'text-3xl font-semibold text-center mb-4'}>{config.MetaData[props.pageType].h1}</h1>
    )
}

export default PageTitle;