import React from 'react';
import { Link } from "react-router-dom";
import AppMeta from "./Meta/AppMeta";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                </ul>
            </nav>
            <AppMeta />
        </header>
    )
};

export default Header;