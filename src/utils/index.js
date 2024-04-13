export function getPathName(path) {
    return path === '/' ? 'home' : path.replace('/', '');
}