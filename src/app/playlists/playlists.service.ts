import { Inject, Injectable, Optional } from '@angular/core';
import { Playlist } from '../interfaces';
import { clone } from '../utils';

@Injectable({
    providedIn: 'root',
})
export class PlaylistsService {
    constructor(@Optional() @Inject('playlists') playlists) {
        this.playlists = playlists || [];
    }

    playlists: Playlist[] = [];

    getPlaylist = (id: number): Playlist | undefined => {
        return (
            this.playlists.find((playlist) => playlist.id === id) || undefined
        );
    };

    savePlaylist = (item: Playlist): boolean => {
        if (item) {
            const { id } = item;
            const arr = clone(this.playlists);
            const index = arr.findIndex((playlist) => playlist.id === id);

            if (index !== -1) {
                arr[index] = clone(item);
                this.playlists = clone(arr);

                return true;
            }
        }

        return false;
    };

    createPlaylist = (playlist: Playlist): void => {
        const arr = clone(this.playlists);
        const id = Number(arr[arr.length - 1].id) + 1;

        arr.push({
            ...playlist,
            id,
        });

        console.log(arr);

        this.playlists = arr;
    };

    getPlaylists = (): Playlist[] => {
        return this.playlists;
    };
}
