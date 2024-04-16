import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import AppMeta from "./components/Meta/AppMeta";

const Layout = () => {
    return (
        <div className={'container mx-auto'}>
            <AppMeta />
            <Header />
            <Seo />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;