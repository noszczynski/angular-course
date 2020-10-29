const ITEM = 'token';

export default {
    get: () => localStorage.getItem(ITEM),
    set: (token) => localStorage.setItem(ITEM, token),
    clear: () => localStorage.removeItem(ITEM),
};
