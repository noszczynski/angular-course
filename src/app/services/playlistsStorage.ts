import { Playlist } from '../interfaces';
import { clone } from '../utils';

const ITEM = 'playlists';

const getAll = (): Playlist[] | null => {
    const data = localStorage.getItem(ITEM);

    if (data) {
        const parse = JSON.parse(data);

        if (parse) {
            return parse.items;
        }

        return null;
    }

    return null;
};

const get = (id: number): Playlist | null => {
    const data = getAll();

    if (data) {
        const playlist = data.find((item) => item.id === id);

        if (playlist) {
            return playlist;
        }

        return null;
    }

    return null;
};

const set = (arr): boolean => {
    const items = JSON.stringify({ items: clone(arr) });

    try {
        localStorage.setItem(ITEM, items);
        return true;
    } catch (e) {
        return false;
    }
};

export default {
    getAll,
    get,
    set,
};
