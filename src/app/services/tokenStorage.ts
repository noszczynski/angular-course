const ITEM = 'token';

export default {
    get: () => sessionStorage.getItem(ITEM),
    set: (token) => sessionStorage.setItem(ITEM, token),
    clear: () => sessionStorage.removeItem(ITEM),
};
