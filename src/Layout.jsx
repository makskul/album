import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seo from "./components/Seo";

const Layout = () => {
    return (
        <>
            <Header />
            <Seo />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;