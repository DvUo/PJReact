export const addVersionToUrl = (url) => {
    const appVersion = import.meta.env.VITE_APP_VERSION;
    return `${url}?v=${appVersion}`;
};
