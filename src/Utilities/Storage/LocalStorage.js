
export default setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}


export default getLocalStorage = (key) => {
    return localStorage.getItem(key);
}
