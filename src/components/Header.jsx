import React from 'react';
import { Link } from "react-router-dom";
import AppMeta from "./Meta/AppMeta";

const Header = () => {
    return (
        <header className={'flex items-center justify-center py-4 px-5 mb-4 bg-indigo-600'}>
            <nav>
                <ul className={'text-center'}>
                    <li className={'inline-block mr-4'}>
                        <Link to="/" className={'text-gray-50'}>Home</Link>
                    </li>
                    <li className={'inline-block text-3xl ml-5 mr-5 text-gray-200'}>
                        Share your Impressions
                    </li>
                    <li className={'inline-block ml-4'}>
                        <Link to="/about" className={'text-gray-50'}>About Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;