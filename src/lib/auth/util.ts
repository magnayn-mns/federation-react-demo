const requestedUrlKey = "requestedUrl";

export function saveRequestUrl() {
    const path = window.location.pathname + window.location.search;
    localStorage.setItem(requestedUrlKey, path);
}

export function getRequestedUrl() {
    const url = localStorage.getItem(requestedUrlKey) ?? "/";
    localStorage.removeItem(requestedUrlKey);
    return url;
}