import React from 'react';
import PageMeta from "./Meta/PageMeta";
import PageTitle from "./PageTitle";
import { getPathName } from "../utils";
import { useLocation } from "react-router-dom";

const Seo = () => {
    const pageName = getPathName();
    return (
        <>
            <PageMeta  pageType={pageName} />
            <PageTitle pageType={pageName} />
        </>
    )
};

export default Seo;