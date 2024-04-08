import React from 'react';
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
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
            </header>
        </>
    )
};

export default Layout;