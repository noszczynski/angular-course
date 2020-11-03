import { EventEmitter, Injectable } from '@angular/core';
import api from '../services/api';
import { clone } from '../utils';
import tokenStorage from '../services/tokenStorage';
import { ID } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class MusicSearchService {
    constructor() {
        (async () => await this.setSearchTerm(this.searchTerm))();
    }

    albumsUpdated: EventEmitter<any> = new EventEmitter();

    albums = [];
    searchTerm;

    searchAlbums = async (term = this.searchTerm) => {
        if (term && term.length >= 3) {
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

        return [];
    };

    setSearchTerm = async (term: string) => {
        this.searchTerm = term;
        const result = await this.searchAlbums(term);

        if (result && result.length > 0) {
            await this.setAlbums(result);
            return await result;
        }

        return this.albums;
    };

    setAlbums = (albums: any[] = []) => {
        this.albums = clone(albums);
        this.albumsUpdated.emit(albums);
    };

    getAlbums = async () => {
        return this.albums;
    };

    getAlbum = async (id: ID) => {
        const query = `/albums/${id}`;

        return await api
            .get(query)
            .then((response) => response.data)
            .catch(() => tokenStorage.clear());
    };
}
