import {useLocation, useParams, useSearchParams} from "react-router-dom";

export function getPathName() {
    const pathname = useLocation().pathname.split('/')[1];

    return pathname === '' ? 'home' : pathname;
}

export function getFetchUrl() {
    const urlPathName = getPathName() === 'home' ? 'users' : getPathName();
    const [searchParams] = useSearchParams();
    const paramUserId = searchParams.get('userId') || '';
    const paramSearch = searchParams.get('search') || '';
    const { slug } = useParams();
    const url = new URL(`https://jsonplaceholder.typicode.com/${urlPathName}`);
    url.pathname = urlPathName;

    if (slug && (urlPathName === 'posts' || urlPathName === 'albums')) {
        url.pathname = `${urlPathName}/${slug}`;
    } else if (urlPathName === 'posts' || urlPathName === 'albums') {
        url.searchParams.append('userId', paramUserId);
    }

    if (urlPathName === 'users' && paramSearch) {
        url.searchParams.append('username_like', paramSearch);
    }

    return url.href;
}