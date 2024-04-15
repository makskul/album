import {useLocation} from "react-router-dom";

export function getPathName() {
    const pathname = useLocation().pathname.split('/')[1];

    return pathname === '' ? 'home' : pathname;
}

export function getFetchUrl(param, slug = false) {
    const pathname = getPathName() === 'home' ? 'users' : getPathName();

    if (slug && (pathname === 'posts' || pathname === 'albums')) {
        return `https://jsonplaceholder.typicode.com/${pathname}/${param}`;
    }

    if (pathname === 'posts' || pathname === 'albums') {
        return `https://jsonplaceholder.typicode.com/${pathname}?userId=${param}`;
    }

    return `https://jsonplaceholder.typicode.com/${pathname}`;
}