import { EventEmitter, Injectable } from '@angular/core';
import api from '../services/api';
import { clone } from '../utils';
import tokenStorage from '../services/tokenStorage';

@Injectable({
    providedIn: 'root',
})
export class MusicSearchService {
    constructor() {
        (async () => await this.setSearchTerm(this.searchTerm))();
    }

    albumsUpdated: EventEmitter<any> = new EventEmitter();

    albums = [];
    searchTerm = 'cyberpunk';

    searchAlbums = async (term = this.searchTerm) => {
        if (term && term.length > 3) {
            const baseQuery = '/search?type=album&market=PL&query=';
            const query = `${baseQuery}${term.replace(' ', '+')}`;

            const result = await api
                .get(query)
                .then((response) => response)
                .catch(() => tokenStorage.clear());

            if (
                result &&
                result.data &&
                result.data.albums &&
                result.data.albums.items
            ) {
                return result.data.albums.items;
            }

            return [];
        }

        return this.albums;
    };

    setSearchTerm = async (term: string) => {
        this.searchTerm = term;
        const result = await this.searchAlbums(term);
        await this.setAlbums(result);

        return await result;
    };

    setAlbums = (albums: any[] = []) => {
        this.albums = clone(albums);
        this.albumsUpdated.emit(albums);
    };

    getAlbums = async () => {
        return this.albums;
    };
}
