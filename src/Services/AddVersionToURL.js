export const addVersionToUrl = (url) => {
    const version = import.meta.env.VITE_APP_VERSION;
    return url.includes("?") ? `${url}&v=${version}` : `${url}?v=${version}`;
  };