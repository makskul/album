import {useLocation, useParams, useSearchParams} from "react-router-dom";

export function getPathName() {
    const pathname = useLocation().pathname.split('/')[1];

    return pathname === '' ? 'home' : pathname;
}

export function getFetchUrl() {
    const pathname = getPathName() === 'home' ? 'users' : getPathName();
    const [searchParams] = useSearchParams();
    const paramUserId = searchParams.get('userId') || '';
    const { slug } = useParams();

    if (slug && (pathname === 'posts' || pathname === 'albums')) {
        return `https://jsonplaceholder.typicode.com/${pathname}/${slug}`;
    }

    if (pathname === 'posts' || pathname === 'albums') {
        return `https://jsonplaceholder.typicode.com/${pathname}?userId=${paramUserId}`;
    }

    return `https://jsonplaceholder.typicode.com/${pathname}`;
}